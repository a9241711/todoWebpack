import { getDocs, deleteDoc, collection, where, query } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebaseconfig';


const Item = ({ deleteData,setIsDelte, data }) => {

  const handleDelete = async(e) => {
    const currentId = e.target.parentElement.id;
    console.log(currentId);
    const deleteRef=query(collection(db,"notelist"),where("id","==",currentId));
    const querySnapshot = await getDocs(deleteRef);
    querySnapshot.forEach((item)=>{
      deleteDoc(item.ref);
    })
    setIsDelte(true);
  };
  return (
    <div className="itemList">
      {data.map((item) => {
        const { id, text } = item;
        return (
          <div key={id} id={id} className="items">
            <p>{text}</p>
            <button onClick={handleDelete}>刪除</button>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
