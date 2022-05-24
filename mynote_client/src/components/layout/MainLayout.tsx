import React, {FC, useContext, useEffect, useState} from 'react'
import Tree from "../treeFiles/Tree"
import {
  MainLayoutHideLeftSideBtn,
  MainLayoutLeftSide,
  MainLayoutRightSide,
  MainLayoutRow,
  MainLayoutWrapper
} from "./styles"
import {useQuery} from "@apollo/client"
import arrayToTree from "array-to-tree"
import Header from "./Header/Header"
import Footer from "./Footer"
import {GET_TREE} from "./queries"
import Preloader from "./items/Preloader";
import {drawerWidth} from './items/LayoutContent'
import MainAlert from "../alert/MainAlert";
import {useDispatch, useSelector} from "react-redux";
import {createFileTree} from "../../store/fileSlice/fileSlice";

const MainLayout: FC = ({children}) => {
  const {loading, error, data} = useQuery(GET_TREE)
  const dispatch = useDispatch()
  const tree = useSelector((state: any) => state.file.tree)
  const [open, setOpen] = useState(true)

  const handleDrawerSwitch = () => {
    setOpen(prevOpen => !prevOpen)
  }

  useEffect(() => {
    if (!!data) dispatch(createFileTree(data))
  }, [data])


  return (
    <MainLayoutWrapper>
      <Header/>
      <MainLayoutRow>
        <MainLayoutLeftSide
          width={drawerWidth}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {loading ? <Preloader/> : <Tree data={tree}/>}
        </MainLayoutLeftSide>
        <MainLayoutRightSide open={open}>
          <MainLayoutHideLeftSideBtn open={open} onClick={handleDrawerSwitch}/>
          {children}
        </MainLayoutRightSide>
      </MainLayoutRow>
      <Footer/>
      <MainAlert/>
    </MainLayoutWrapper>
  )
}

export default MainLayout