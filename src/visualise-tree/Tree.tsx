import { ReactNode } from "react";
import { IoIosBaseball } from "react-icons/io";

import "./Tree.css";

type TreeNodeType = {
  name: string;
  children?: TreeNodeType[];
};

const TreeNode = ({
  name,
  icon,
  isLast,
  children,
}: {
  name: string;
  icon: ReactNode;
  isLast?: boolean;
  children?: ReactNode;
}) => {
  return (
    <div className={`tree-node ${isLast ? "last-node" : ""}`}>
      <div className="inline">
        <div className="link-to-parent" />
        <div className="inline tree-node-content">
          {icon}
          <span>{name}</span>
        </div>
      </div>

      {children && <div className="sub-tree-container">{children}</div>}
    </div>
  );
};

export const StaticTree = () => {
  return (
    <div className="tree-container">
      <TreeNode name="Element 1" icon={<IoIosBaseball />}>
        <TreeNode name="Element 1.1" icon={<IoIosBaseball />} />
        <TreeNode name="Element 1.2" icon={<IoIosBaseball />} isLast />
      </TreeNode>
      <TreeNode name="Element 2" icon={<IoIosBaseball />} />
      <TreeNode name="Element 2" icon={<IoIosBaseball />}>
        <TreeNode name="Element 2.1" icon={<IoIosBaseball />} />
        <TreeNode name="Element 2.2" icon={<IoIosBaseball />}>
          <TreeNode name="Element 2.2.1" icon={<IoIosBaseball />} />
          <TreeNode name="Element 2.2.2" icon={<IoIosBaseball />} isLast />
        </TreeNode>
        <TreeNode name="Element 2.3" icon={<IoIosBaseball />} isLast />
      </TreeNode>
      <TreeNode name="Last" icon={<IoIosBaseball />} isLast />
    </div>
  );
};

const TreeContent = ({
  data,
  isLast,
}: {
  data: TreeNodeType;
  isLast: boolean;
}) => {
  return (
    <TreeNode name={data.name} icon={<IoIosBaseball />} isLast={isLast}>
      {data.children?.map((node, index, array) => (
        <TreeContent data={node} isLast={index === array.length - 1} />
      ))}
    </TreeNode>
  );
};

export const TreeWithData = ({ data }: { data: TreeNodeType }) => {
  return (
    <div className="tree-container">
      <TreeContent data={data} isLast />
    </div>
  );
};
