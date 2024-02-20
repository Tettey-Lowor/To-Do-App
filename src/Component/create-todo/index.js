
import styles from "./index.module.css"
import { useLocalStorage } from "usehooks-ts";
import {useState} from "react"

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY",[]);
    //let todo;
    const [todo, setTodo] =useState("");

    //function collectInput(event) {
        //todo = event.target.value;
        //setTodo([event.target.value]);}
    const collectInput = event => setTodo([event.target.value]);
    
    function saveTodo(){
        // Get existing list of todos from local storage
        //let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
        // console.log(todos)
        //Add a new todo to existing list of todos
        // Set all todos in local storage
        setTodos([...todos,todo]);
        
        localStorage.setItem("TODO_KEY", JSON.stringify(todos))
        //saveTodo
    }
    
    return (
        <section className={styles.createTodoSection}>
            <input onChange={event => setTodo(event.target.value)} 
            className= {styles.createTodoInput} placeholder= "Start typing....." />
            <button className ={ `btn btn-warning ${styles.btn}`} 
            onClick={() => setTodos([...todos,todo])}
            >Create</button>
        </section>
        
    );
}
export default CreateTodo;