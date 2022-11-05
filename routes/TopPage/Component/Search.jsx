import { Link } from "react-router-dom"
import React,{useState} from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

const Search=()=>{
  const [firstTab,setFirstTab]=useState(true);
  const [secondTab,setSecondTab]=useState(false);
  const [thirdTab,setThirdTab]=useState(false);

  const onClickFirstTab=()=>{
    setFirstTab(true);
    setSecondTab(false);
    setThirdTab(false);
  };
  const onClickSecondTab=()=>{
    setFirstTab(false);
    setSecondTab(true);
    setThirdTab(false);
  };
  const onClickThirdTab=()=>{
    setFirstTab(false);
    setSecondTab(false);
    setThirdTab(true);
  };
    return(
<div className="secondMain">
      <div className="searchPart">
        <h2>Search</h2>
        <div className="container">
          <ul className="tab-list">
            <li className="tab-item" onClick={onClickFirstTab}>現在地から探す</li>
            <li className="tab-item" onClick={onClickSecondTab}>都道府県から探す</li>
            <li className="tab-item" onClick={onClickThirdTab}>積雪量から探す</li>
          </ul>
          <div className="tab-container">
            {firstTab&&<FirstTab/>}
            {secondTab &&<SecondTab/>}
            {thirdTab&&<ThirdTab/>}
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Search;
