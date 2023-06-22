import React from "react";
import { useSelector } from "react-redux";
import FamilyTree from './mytree';
const Tree = () => {
  const data = useSelector(state => state.database.database)

  return (
    <div>
      <div style={{ height: "100%",marginTop:"10px" }}>
        <FamilyTree
          nodes={data}
        />
      </div>
    </div>
  );
};

export default Tree;
