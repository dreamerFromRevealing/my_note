import React, {FC} from 'react';
import {NodeChildProps} from "./Node";
import {NodeItem, NodeRow, NodeWrapper} from "../styles";
import {AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import NodeText from "../nodeText/NodeText";
import NodeMenu from "../NodeMenu";
import {useRouter} from "next/router";

const NodeWithoutChild: FC<NodeChildProps> = (
  {
    item,
    level,
    isFolder,
    setRename,
    rename,
    setCreateComponent
  }) => {
  const router = useRouter()
  const getDocument = () => {
    router.push('/?docId=' + item._id)
  }

  return (
    <NodeWrapper level={level}>
      <NodeItem>
        <NodeRow onClick={getDocument}>
          {isFolder ? <AiOutlineFolder size={24}/> : <AiOutlineFile size={24}/>}
          <NodeText
            isFolder={isFolder}
            id={item._id}
            onRename={setRename}
            rename={rename}
            title={item.title || ''}
          />
        </NodeRow>
        <NodeMenu id={item._id} isFolder={isFolder} setCreateComponent={setCreateComponent} onRename={setRename}/>
      </NodeItem>
    </NodeWrapper>
  );
};

export default NodeWithoutChild;