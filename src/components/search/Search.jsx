import React from "react";
import {LuSearch} from "react-icons/lu";
import "./search.scss";

function Search({width, placeholder, color}) {
  return (
    <div className={`search rounded-2 align-items-center px-2 py-1 border d-flex justify-content-between ${color}}`} style={{
        width: `${width}px`,
    }}>
      <input type="text" className={`w-75 `} placeholder={placeholder} />
      <LuSearch className={`icon `}/>
    </div>
  );
}

export default Search;
