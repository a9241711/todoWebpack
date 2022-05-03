import { useState,useEffect } from "react";
import Item from "./Item";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import React from 'react';
import { db } from "../firebaseconfig";
import { addDoc,collection,getDocs,orderBy,query,Timestamp } from "firebase/firestore";

const List=()=>{
    const[data,setData]=useState([]);
    const[text,setText]=useState("");
    const[isSummit,setIsSubmmit]=useState(true);
    const[idDelete,setIsDelte]=useState(false);

    const handleTextValue=(e)=>{
        setText(e.target.value);
    }
    const handleSubmmitDbtn=async ()=>{
        setIsSubmmit(true);
        const id=v4();
        const ref=collection(db,"notelist");
        const time=Timestamp.now();
        const obj={id,text,time:time["seconds"]}
        try{
            await addDoc(ref,obj);
        }
        catch(e){
            console.log(e);
        }
        setText("");
    }

    useEffect(()=>{
        
        async function getListFromDb(){
            const listRef=query(collection(db,"notelist"),orderBy("time","desc"));
            const data=await getDocs(listRef);
            const dataArr=[]
            data.forEach((doc)=>{
                const{id,text}=doc.data();
                dataArr.push({id,text});
            })
            setData(dataArr);
        }
        setIsSubmmit(false);
        setIsDelte(false);
        return()=>getListFromDb()
    },[isSummit,idDelete])
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
        <Item  data={data} setIsDelte={setIsDelte} deleteData={setData}/>
        </>
    )

}

export default List;