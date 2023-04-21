import React, { useState } from "react";


export const TodoList = () => {
  const [inputValue, setInpuntValue] = useState("");
  const [taskList, setTaskList] = useState([
    {
      description: "Lavar los Dientes",
      status: true,
    },
    {
      description: "preparar desayuno",
      status: true,
    },
    {
      description: "Estudiar camino al trabajo",
      status: true,
    },
  ]);
   

  const handleyAddTask = (event) => {
    setInpuntValue(event.target.value);
    if (event.key == "Enter") {
      console.log(event.key);
      setTaskList([
        ...taskList,
        {
          description: inputValue,
          status: false,
        },
      ]);
    }
  };

  const deletTask = (posicionList) => {
    setTaskList(
        taskList.filter( (taskList, taskindex) => taskindex != posicionList )
    
      );
console.log(posicionList)
  }

  return (
    <>
      <div className= "m-auto p-5 justify-content-center"  style={{width: "30rem"}}> 
      
      <h1 className="text-center">Todolist </h1>
          <div>
            <div className="input-group mb-1" >
              <input type="text" onKeyUp={handleyAddTask} style={{width: "25rem"}}/>
            </div>
          </div>
          <ul className="list-group">
            {taskList.map((element, index) => {
              return (
                <li key={index} className="list-group-item">
                  {" "}
                  {element.description}{" "}
                  <button type="button" onClick={ () => deletTask(index) } className="btn btn-danger"> x </button>
                </li>
              );
            })}
          </ul>
        </div>  
    </>
  );
};
