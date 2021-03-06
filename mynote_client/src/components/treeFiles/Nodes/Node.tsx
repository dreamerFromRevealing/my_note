import React, {FC, useState} from 'react';
import {DATAType} from "../../../types/types_data_from_server/dataType";
import {NodeItem, NodeRow, NodeWrapper} from "../styles";
import {AiOutlineDown, AiOutlineFile, AiOutlineFolder, AiOutlineUp} from 'react-icons/ai';
import {useRouter} from 'next/router'
import NodeMenu from "../NodeMenu";
import NodeText from "../nodeText/NodeText";
import NodeWithChild from "./NodeWithChild";
import NodeWithoutChild from "./NodeWithoutChild";
import NodeNewComponent from "./NodeNewComponent";

interface NodeProps {
  item: DATAType
  level: number
  onToggle: false | (() => void)
  selected: boolean
  isFolder: boolean
}

export interface NodeChildProps extends NodeProps {
  setRename: (rename: boolean) => void;
  setCreateComponent: (string: string) => void;
  rename: boolean;
}

const Node: FC<NodeProps> = ({item, level, onToggle, selected, isFolder}) => {
  const [rename, setRename] = useState(false)
  const [createComponent, setCreateComponent] = useState('')

  return (
    <>
      { onToggle ?
        <NodeWithChild
          item={item}
          level={level}
          onToggle={onToggle}
          rename={rename}
          setRename={setRename}
          isFolder={isFolder}
          selected={selected}
          setCreateComponent={setCreateComponent}
        />
        :
        <NodeWithoutChild
          rename={rename}
          setRename={setRename}
          isFolder={isFolder}
          selected={selected}
          item={item}
          level={level}
          onToggle={onToggle}
          setCreateComponent={setCreateComponent}
        />}
      {createComponent && <NodeNewComponent parenId={item._id} setCreateComponent={setCreateComponent} createComponent={createComponent}/>}
    </>
  );
};

export default Node;