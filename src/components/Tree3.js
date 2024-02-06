import React from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../pages/Helpers";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};
const containerStyles = {
  width: "100vw",
  height: "100vh",
};

const renderNodeWithCustomEvents = ({
  nodeDatum,
  toggleNode,
  handleNodeClick,
}) => (
  <g>
    <circle r="15" onClick={() => handleNodeClick(nodeDatum)} />
    <text fill="black" strokeWidth="1" x="20" onClick={toggleNode}>
      {nodeDatum.name} (click me to toggle 👋)
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function OrgChartTree() {
  const [translate, containerRef] = useCenteredTree();
  const handleNodeClick = (nodeDatum) => {
    window.alert(
      nodeDatum.children ? "Clicked a branch node" : "Clicked a leaf node."
    );
  };
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div style={containerStyles} id="treeWrapper">
      <Tree
        data={orgChart}
        translate={translate}
        renderCustomNodeElement={(rd3tProps) =>
          renderNodeWithCustomEvents({ ...rd3tProps, handleNodeClick })
        }
        orientation="vertical"
        pathFunc={"step"}
      />
    </div>
  );
}
