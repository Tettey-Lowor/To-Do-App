
import React from "react";
import Header from "./Component/Header";
import CreateTodo from "./Component/create-todo";
import TodoList from "./Component/todo-list";
function App() {
  return(
    <React.Fragment>
      <Header/>
      <CreateTodo/>
      <TodoList/>
    </React.Fragment>
    
    
  );
  
}

export default App;
