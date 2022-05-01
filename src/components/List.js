import { useState } from "react";
import Item from "./Item";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import React from 'react';


const List=()=>{
    const[data,setData]=useState([]);
    const[text,setText]=useState("")

    const handleTextValue=(e)=>{
        setText(e.target.value);
    }
    const handleSubmmitDbtn=()=>{
        const id=v4();
        setData((prev)=> [{id,text},...prev]);
        setText("")
    }
    return(
        <>
        <div className="listDiv">
            <Link  to={"/"} > 返回首頁</Link>
            <h1>Here is List Page</h1>
            <p>記事:</p>
            <div className="listInput">
            <input type="text" placeholder="請輸入文字" value={text} onChange={handleTextValue}/>
            <button className="add" onClick={handleSubmmitDbtn}>
                新增
            </button>
            </div>
        </div>
        <Item  data={data}  deleteData={setData}/>
        </>
    )

}

export default List;