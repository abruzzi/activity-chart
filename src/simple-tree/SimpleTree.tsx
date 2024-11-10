import { useState } from "react";
import './simple-tree.css';

type TreeNodeType = {
  name: string;
  children?: TreeNodeType[];
};

const TreeNode = ({ name, children }: TreeNodeType) => {
  const [isExpand, setExpand] = useState(true);

  const handleClick = () => {
    setExpand((expand) => !expand);
  };

  return (
    <li>
      <span className={children ? "hasChildren" : ""} onClick={handleClick}>
        {name}
      </span>
      {isExpand && children && (
        <ul>
          {children.map((node) => (
            <TreeNode name={node.name} children={node.children} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const SimpleTree = ({ data }: { data: TreeNodeType }) => {
  return (
    <ul>
      <TreeNode name={data.name} children={data.children} />
    </ul>
  );
};
