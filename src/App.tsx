import "./App.css";

import food from "./simple-tree/food.json";
import { StaticTree } from "./simple-tree/StaticTree.tsx";

import folder from "./visualise-tree/folder-structure.json";
import { TreeWithData } from "./visualise-tree/Tree.tsx";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "4rem" }}>
      <StaticTree data={food} />
      <TreeWithData data={folder} />
    </div>
  );
}

export default App;
