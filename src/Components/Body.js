import React, { useState } from "react";
import List from "./list";

const Body = () => {
  const [todoList, setTodoList] = useState([]);
  const [object, setObject] = useState({todoText: "", date: ""});
    


  const addTodo = () =>{
    if(object.todoText ){
    setTodoList([...todoList, object])
    console.log(todoList)
    setObject({todoText: "", date: ""})
    }
  }  
    const deleteFromList = (index) => {
    setTodoList(todoList.filter((val, idx) => idx !== index));
  };

  return (
    <div className="">
      <div className="w-1/3 mx-auto shadow-xl bg-fuchsia-200  p-2 ">
        <input
          value={object.todoText}
          onChange={(e) =>{
            setObject({...object, todoText:e.target.value})
          }}
          type="text"
          placeholder="type here"
          className="border border-black w-5/12 mx-2 h-10 rounded-sm p-2 py-4"
        ></input>
        <input
          type="date"
          value={object.date}
          onChange={(e) =>{
            setObject({...object, date:e.target.value})
          }}
          className="border border-black mx-1 w-1/3 rounded-sm h-8"
        ></input>
        <button
          className="border border-black shadow ml-2 w-1/6 rounded-md h-8 font-semibold text-lg bg-green-500 hover:bg-green-600 active:bg-green-500"
          onClick={addTodo}
        >
          Add
        </button>
        <div className="mt-5 overflow-y-scroll h-72">
          <ol>
            {todoList.map((value, index) => (
              <li key={index}>
                <List todo={value} index={index} onDelete={deleteFromList} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Body;
