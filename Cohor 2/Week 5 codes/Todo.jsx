import React, { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([{
    id: 1,
    title: "gym",
    desc: "go to gym"
  }, {
    id: 2,
    title: "eat",
    desc: "go to eat"
  }, {
    id: 3,
    title: "sleep",
    desc: "go to sleep"
  }])

  const addTodo = () => {
    const newTodos = [...todos]; // copying array using spread operator
    newTodos.push({
      id: 4,
      title: "task",
      desc: "there's a new task in town"
    })

    setTodos(newTodos); // update the state
  }

  return(
    <div>
      <h1>Hello</h1>
      <button onClick={addTodo}>Add a Todo</button> 
      {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc} />)}
    </div>
  )
}

function Todo({ title, desc }){
  return(
    <>
      <h1>{title}</h1>
      <h5>{desc}</h5>
    </>
  )
}

export default App;
