import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {
    const [tasks,setTasks]=useState([])
    const [taskInput,setTaskInput]=useState('')

    const addTask=()=>{
        if(taskInput.trim()!==''){
            setTasks([...tasks,{text:taskInput}])
            setTaskInput('');
        }
    }
    
    const deleteTask=(index)=>{
        const newTask=tasks.filter((task,i)=>i!=index)
        setTasks(newTask);
    }

    const editTask=(index,newText)=>{
        const newTasks=tasks.map((task,i)=>
        i==index?{...tasks,text:newText}:task)
        setTasks(newTasks);
    }

  return (
    <div className='todo'>
        <div className="title">
             <h1>TODO APP</h1>
        </div>
 
    <div className="input-addTask">
        <input type="text" 
        value={taskInput}
        onChange={(e)=>setTaskInput(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasklist">
        {tasks.map((task,index)=>
          <div className="task-item" key={index}>
          <input type="checkbox" />
          <input type="text" value={task.text} className='item-input' onChange={(e)=>editTask(index,e.target.value)}/>
          <button onClick={()=>deleteTask(index)}>Delete</button>
        
     </div>)}
      
   

      </div>
    </div>
     
    
  )
}

export default Todo
