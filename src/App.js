import React,{useState} from 'react';
import Form from './Form';
import Title from './Title';


 
function App() {
  const [todos,setTodos]=useState([])
  const toggleComplete=i=>
  setTodos(todos.map((todo,k)=>k===i?{...todo,complete: !todo.complete}:todo))
  
return (
    <div className="App">
      <Title/>
      <Form onSubmit={text=>setTodos([{text,complete:false},...todos])}/>
      <ol>
        {todos.map(({ text, complete },i)=>(
                       <li key={text} 
                           onClick={()=>toggleComplete(i)} 
                           style={{textDecoration:complete ? 'line-through' : ' ', color:complete? 'grey':'blue'}}>
                          {text}
                      </li>)).reverse()}
      </ol>
      <button style={{marginLeft: 40}}onClick={()=>setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
