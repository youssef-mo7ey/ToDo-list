import React, { useState } from "react";
import Form from "./components/form";
import "./App.css";
import Tasks from "./components/tasks";
import EditForm from "./components/EditForm";

function App() {
  const [input, setInput] = useState("");
  const [isEmpty,setIsEmpty]=useState(false)
  const [task, setTask] = useState([]);
  const [editFlag,setEditFlag]=useState(false);
  const [editedName,setEditedName]=useState({});


  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("err");
      setIsEmpty(true)
    } 
    else {
      setIsEmpty(false)
      let newTask=
      {
        id: Math.random(),
        name: input,
        isChecked: false,
      }
      setTask((prevTask) => [
        ...prevTask,
        newTask
      ]);
      setInput("");
    }

    
  };

  const handleDel=(e)=>{
    let newTasks=[]
    for (let i = 0; i < task.length; i++) {
    
      if(task[i].id !== JSON.parse(e.target.id))
    {
      newTasks.push(task[i])
    }
    }
    setTask([...newTasks])
}


const handleEdit =(e)=>{
  setEditedName({
    id:e.target.id
  })
  setEditFlag(true)

}
  const handleEditButton= (e)=>{

    for (let i = 0; i < task.length; i++) {
      if(task[i].id === JSON.parse(editedName.id))
      {
        task[i].name=input;
      }}
  
    setTask([...task])
    setEditFlag(false)
  }

  const handleBox= (e) =>{

    task.map((t)=>{
      if (e.target.id == t.id)
      {
        if (e.target.checked) {
          t.isChecked=true
          return t
        }
        else{
          t.isChecked=false
          return t
        }
      }
      else{
        return t
      }
    }
    )
    setTask([...task])
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ToDo List</h1>
        <Form
          input={input}
          task={task}
          handleInput={(e) => handleInput(e)}
          handleAdd={(e) =>handleAdd(e)}
          isEmpty={isEmpty}
        />

        <Tasks 
        tasks={task}
        handleDel={(e)=>handleDel(e)} 
        handleEdit={(e)=>handleEdit(e)} 
        handleBox={(e) =>handleBox(e)}
        />
        {editFlag 
        && 
        <EditForm
        handleInput={(e)=>handleInput(e)}
        handleEditButton={(e)=>handleEditButton(e)}/>}
      </div>
    </div>
  );
}

export default App;
