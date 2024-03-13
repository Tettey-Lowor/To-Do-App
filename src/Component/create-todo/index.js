
import styles from "./index.module.css"

import {useState} from "react"

 function CreateTodo() {
   
    const [todo, setTodo] = useState("");

    const saveTodos = async () => {
        // post todo to the todo api
        const response = await fetch ('http://localhost:4000/todos', {
            method:"POST",
            body: JSON.stringify({
                title:todo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    console.log('hghggh',data);
    
        //wipe the input box
        setTodo("");
    }
    
    
         
    return (
        <section className={styles.createTodoSection}>
            <input 
            value={todo}
            //onKeyPress={event => event.charCode == 13 
                onKeyDown= {event => event.key == "Enter" &&
                saveTodos()}
            onChange={event => setTodo(event.target.value)} 
            className= {styles.createTodoInput} placeholder= "Start typing....." />
            <button className ={ `btn btn-warning ${styles.btn}`} 
            
            onClick={() => saveTodos()}
            >Create</button>
        </section>
        
    );
    }

export default CreateTodo;