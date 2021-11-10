import React, { useState } from "react";
import "./base.css";
import Tree from "./component/tree";

const Base = () => {
  const [item, setItem] = useState("");
  const [hierarchy, setHierarchy] = useState("");
  const [parent, setParent] = useState("");
  // const [child, setChild] = useState([]);
  const [parentList, setParentList] = useState([]);
  const [dataDisplay, setDataDisplay] = useState([]);

  const datafetch = (e) => {
    e.preventDefault();
    let itemDetail;
    if(parent === ''){
       itemDetail = {
        item,
        hierarchy,
        parent,
        child:[]
      };
    }
    else{
      itemDetail = {
        item,
        hierarchy,
        parent,
        child:['true']
      };
      // dataDisplay.map((data) => (
      //   data.filter(data2 =>
      //     {
      //       if(data.item===data.parent)
      //     }
            
      //   )

      // ))
    }
    

    setParentList([...parentList, item]);
    setDataDisplay([...dataDisplay, itemDetail]);
    setHierarchy("select");
    setParent("");

    
  };
  console.log("parentlist",dataDisplay);


  // const reArrange = (data) => {
  //   const arrangeData = [];
  //   data?.map((ele) => {
  //     if (ele.hierarchy === "parent") {
  //       arrangeData.push(ele);
  //       data.map((e) => {
  //         if (e.parent === ele.item) {
  //           arrangeData.push(e);
  //         }
  //       });
  //     }
  //   });
  //   setDataDisplay(arrangeData);
  //   setHierarchy("select");
  //   setParent("");
  //   console.log("arrangedata", arrangeData);

  // };
  const handleHierarchy = (e) => {
    setHierarchy(e.target.value);
  };

  return (
    <>
      <header className="App-header">
        <h5>Tree Structure</h5>
      </header>
      <form>
        <div>
          <label>Enter Item:</label>
          <input
            type="text"
            id="item"
            placeholder="placeholder"
            onChange={(e) => setItem(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Hierarchy : </label>
          <select
            id="opt"
            defaultValue="select"
            value={hierarchy}
            onChange={(e) => handleHierarchy(e)}
          >
            <option value="select">select</option>
            <option value="parent">Parent</option>
            <option value="child">Child</option>
          </select>
        </div>
        <div>
          {hierarchy === "child" && (
            <>
              <label>Parents : </label>
              <select id="option" onChange={(e) => setParent(e.target.value)}>
                {parentList?.length &&
                  parentList?.map((ele) => <option value={ele}>{ele}</option>)}
              </select>
            </>
          ) }
        </div>

        <button value="Submit" onClick={(e) => datafetch(e)}>
          submit
        </button>
      </form>
      <div className="tree-display">
        <Tree data={dataDisplay}></Tree>
      </div>
    </>
  );
};
export default Base;
