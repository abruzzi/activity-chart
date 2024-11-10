import "./simple-tree.css";
import { PiLeafThin } from "react-icons/pi";
import { PiLeafFill } from "react-icons/pi";

type TreeNodeType = {
  name: string;
  children?: TreeNodeType[];
};

const FancyNode = ({
  name,
  hasChildren,
}: {
  name: string;
  hasChildren: boolean;
}) => {
  return (
    <div
      className={`${
        hasChildren ? "hasChildren" : ""
      } tree-node-container inline-layout`}
    >
      {hasChildren ? <PiLeafFill /> : <PiLeafThin />}
      <span>{name}</span>
    </div>
  );
};

const TreeNode = ({ name, children }: TreeNodeType) => {
  return (
    <li>
      <FancyNode name={name} hasChildren={Boolean(children)} />
      {/*<span className={children ? "hasChildren" : ""}>{name}</span>*/}
      {children && (
        <ul>
          {children.map((node) => (
            <TreeNode name={node.name} children={node.children} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const StaticTree = ({ data }: { data: TreeNodeType }) => {
  return (
    <ul>
      <TreeNode name={data.name} children={data.children} />
    </ul>
  );
};
