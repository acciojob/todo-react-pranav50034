
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [todoArray, setTodoArray] = useState([])
  const [todo, setTodo] = useState(null)
  const [id, setId] = useState(1)
  const [error, setError] = useState("")

  function addTodo(e){
    e.preventDefault()
    if(todo!=null){
      setError("")
      setTodoArray([...todoArray, {id: id, todo: todo}])
      setId(id+1)
    }
    else if(!todo){
      setError("Enter TODO")
    }
  }

  function deleteTodo(id){
    let array = []
    todoArray.map(element => {
      if(element.id!=id){
        array.push(element)
      }
    })
    setTodoArray(array)
  }

  return (
     <div>
        <h1>TODO App</h1>
        <form onSubmit={addTodo}>
           <input
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              name="todo"
              placeholder="TODO"
           />
           <button type="submit">Add TODO</button>
        </form>

        <div>
           {error && <p style={{ color: 'red'}}>{error}</p>}

           {todoArray.length!=0 &&
              (todoArray.map((element) => (
                 <div id={element.id}>
                    <p>
                       <span>{element.todo}{" "}</span>
                       <button onClick={()=>{deleteTodo(element.id)}}>
                          Delete
                       </button>
                    </p>
                 </div>
              )))}
        </div>
     </div>
  );
}

export default App




