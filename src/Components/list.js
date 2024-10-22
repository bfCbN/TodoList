import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const List = ({ todo, index, onDelete }) => {
  return (
    <div className="">
      <div className="flex items-center my-2 justify-between ">
        <div className='shadow  ml-2 w-7/12 p-1 truncate hover:overflow-visible hover:whitespace-normal hover:break-words " bg-amber-100 rounded'>
          {todo.todoText}
        </div>
        <div className="bg-red-300 shadow-md w-3/12 pl-4 h-7 flex items-center rounded-md px-2 font-semibold text-md ">
          {todo.date}
        </div>
        <button className="mr-2" onClick={() => onDelete(index)}>
            <i className="fa-solid fa-trash text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default List;
