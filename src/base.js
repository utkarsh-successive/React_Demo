import React, { useState } from "react";
import "./base.css";

const Base = () => {
  const [item, setItem] = useState("");
  const [hierarchy, setHierarchy] = useState("");
  const [parent, setParent] = useState("");
  // const [tree, setTree] = useState({});
  const [parentList, setParentList] = useState([]);
  const [dataDisplay, setDataDisplay]= useState([]);

  const datafetch = (e) => {
    e.preventDefault();
    console.log("under the function after the submit button");
    const itemDetail = {
      item,
      hierarchy,
      parent,
    };
    // setTree({ ...tree, itemDetail });
    if (hierarchy === "parent") {
      setParentList([...parentList,item]);
    }
    setDataDisplay([...dataDisplay, itemDetail]);
  };
  const handleHierarchy = (e) =>{
    setHierarchy(e.target.value);
  };
  console.log('datadisplay1', dataDisplay);

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
            onChange={(e) => handleHierarchy(e)}
          >
            <option disabled>select</option>
            <option value="parent">Parent</option>
            <option value="child">Child</option>
          </select>
        </div>
        <div>
          {hierarchy === "child" ? (
            <>
              <label>Parents : </label>
              <select
                id="option"
                defaultValue="select"
                onChange={(e) => setParent(e.target.value)}
              >
                {parentList?.map((ele)=>(<option value={ele}>{ele}</option>))}
              </select>
            </>
          ) : null}
        </div>

        <button value="Submit" onClick={(e) => datafetch(e)}>
          submit
        </button>
      </form>
      <div>
          {dataDisplay?.map((ele)=>(<ul>
            {/* if ({ele?.Parent === null}){ */}
              < >{ele?.item}</>
               {/* } */}
            
            </ul>))}
        </div>
    </>
  );
};
export default Base;