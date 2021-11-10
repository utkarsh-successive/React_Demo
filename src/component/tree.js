/* eslint-disable no-lone-blocks */
import React from "react";
import "./tree.css";

const Tree = ({ data }) => {
  return (
    <div>
      <ul>
        {data?.map((e) => (
          <Treestructure prop={e} listOfUser={data} />
        ))}
      </ul>
    </div>
  );
};

const Treestructure = ({ prop, listOfUser }) => {
  const newlist = {};
  const list = [];
  let temp;
  listOfUser.map((data) => {
    if (data.parent === '') {
      list.push(data.item);
    }
    else{
      list.map((existData)=>{
        if(data.parent===existData){
          list.push(data.item)
        }
      })
    }
  });
  console.log("check newlist87948749", list, listOfUser);

  Object.keys(listOfUser).reduce((array, key) => {
    return [...array, { key: listOfUser[key] }];
  }, []);
  listOfUser.forEach((ele, index) => {
    if (!index) {
      newlist[ele.item] = {};
      return;
    }
    if (Object.keys(newlist).includes(ele.parent)) {
      newlist[ele.parent][ele.item] = {};
      return;
    }
    temp = Object.keys(newlist).forEach((sub) => {
      if (Object.keys(newlist[sub]).includes(ele.parent)) {
        newlist[sub][ele.parent][ele.item] = {};
        return true;
      }
      return false;
    });
    // console.log("check temp ", temp);
    if (!temp) newlist[ele.item] = {};
  });
  console.log("checknewList", newlist);
  const handleDelete = (data, list) => {
    list.map((check) => {
      if (data === check) {
        // console.log("data exist");
      }
    });
  };
  const showList = (key) => {
    // console.log("checkshowlist", key);
    <div>
      {key}
      <img
        src="/assets/bin.png"
        className="resize"
        alt=""
        onClick={(e) => handleDelete(prop, listOfUser)}
      />
      <div>
        {Object.keys(newlist).forEach((child) => {
          // console.log("under the child", key);

          return (
            <div>
              <ul>{child}</ul>
            </div>
          );
        })}
      </div>
    </div>;
  };

  return (
    <>
      <div className="d-flex">
        {Object.keys(newlist).forEach((key) => {
          // console.log("in a return console", newlist);
          return showList(key);
        })}
      </div>
    </>
  );
};
export default Tree;
