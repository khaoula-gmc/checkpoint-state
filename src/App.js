import React,{useState} from 'react';
import './App.css'
import Form from './Components/Form';
import Title from './Components/Title';
import Task from './Components/Task'
import DelBtn from './Components/DelBtn'
import EditBtn from './Components/EditBtn'

 
function App() {
  const [todos,setTodos]=useState([])
  
  const delTask=(i)=>{
  
    const tasks=Object.assign([],todos)
    tasks.splice(i,1)
  setTodos(...[tasks])
  }
const editTask=(i,text)=>{
  const newTask=prompt('New task',text)
          if(newTask!==''){
          const tasks=Object.assign([],todos)
          tasks.splice(i,1,newTask)
          setTodos(...[tasks])
}
  }
  
return (
    <div className="App" >
      <Title/>
      <Form onSubmit={text=>{text!==''?setTodos([...todos,text]):setTodos([...todos])}}/>
      <div className='todos'>

        {todos.map((text,i)=><Task >{text}
        <div>
          <EditBtn handlerEdit={()=>editTask(i,text)}/>
          <DelBtn handlerDel={()=>delTask(i)}/>
          </div>
          </Task>)}
        
         
      </div>
   
    </div>
  );
}

export default App;
