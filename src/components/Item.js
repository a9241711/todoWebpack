import React from 'react';

const Item = ({ deleteData, data }) => {
  console.log(data);
  const handleDelete = (e) => {
    const currentId = e.target.parentElement.id;
    deleteData((prev) => prev.filter((item) => item.id !== currentId));
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
