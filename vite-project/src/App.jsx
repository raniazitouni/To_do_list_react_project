import { useState } from 'react'
import './App.css'
import cartable from "./assets/school.png"
//import { NewTodoForm } from './NewTodoForm'

function App() {
  const [todos, setTodos] = useState([])
  const [item, setItem] = useState("") //initialisitha be valeur 
  function handleSubmit(e){
      e.preventDefault()
      setTodos((currentTodos) => {
          return[
            ...currentTodos, {id: crypto.randomUUID(), title:item , completed: false}
          ]
      } )
      console.log(todos)
      setItem("")
    }
  function handleSubmit(e){
    e.preventDefault()
    setTodos((currentTodos) => {
        return[
          ...currentTodos, {id: crypto.randomUUID(), title:item , completed: false}
        ]
    } )
    console.log(todos)
    setItem("")
  }

  function deleteTodo(id){
    setTodos((currentTodos) =>{
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  function toggleTodo(id, checked){
    setTodos((currentTodos) => {
      return currentTodos.map( todo => {
        if(todo.id == id){
          return {...todo , completed}
        }
      })
    })
  }
  //neketbo code js et truturni html template
  return (
    <>
     <div className="big-container">
      <div className="title">
        <h1>our first react app</h1>
         <img src={cartable} />
      </div>
       
     </div>
     <form className='new-item-form' onSubmit={handleSubmit}>
        <div className="form-row">
           <label htmlFor='item'> new item</label>
           <input 
           value={item} 
           onChange={(e) => setItem(e.target.value)} 
           type='text' 
           id='item'></input>
        </div>
        <button className='btn'>Add item</button>


      </form>
      
      <div className="container">
          <h1> To do list </h1>
          <ul className='list'>
            {
              todos.map((todo) => {
                return(
                  <li key={todo.id}>
                  <label htmlFor="itm"> 
                  <input   onChange={ e => toggleTodo(id,e.target.checked) } checked={todo.completed} type="checkbox" id="itm"/> 
                    {todo.title}
                  </label>
                  <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </li>
                )
              })
            }
            
          </ul>
        </div>
    </>
  )
}

export default App
