
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {

  const [theme,setTheme] = useState("light-theme")

const togglefun =()=>{
  if(theme === "dark-theme"){
    setTheme('light-theme');
  }
  else{
    setTheme("dark-theme")
  }
}

useEffect(()=>{
  document.body.className = theme;
},[theme])


  return (
    <>
    <div className='togglebtn'><button onClick={()=>togglefun()} className="togbtn">Toggle Mode</button></div>

    <div className="todo-app">
     <h1>Todo App</h1>
     <TodoList />
    </div>
    </>
  );
}

export default App;
