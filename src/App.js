import React, { useContext } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { TodoContext } from "./contexts/TodoContext";

function App() {
  let totalUncomplete = 0;
  const Props = useContext(TodoContext);
  const { todoItems, onItemClicked } = Props;
  //calculate Total Task Completed
  let done = todoItems.reduce((done, next) => {
    if (next.progress !== next.listTodo.length) {
      totalUncomplete += next.listTodo.length;
      return done + next.progress;
    }
    return done;
  }, 0);

  return (
    <div className="App">
      <NavBar />
      <div className="TodoApp">
        {/* Render In Progress Tasks */}
        <div className="BigTitle">
          <h1>In Progress</h1>
          <div className="BigProgress">
            {done}/{totalUncomplete}
          </div>
        </div>
        <hr />
        {todoItems.length > 0 &&
          todoItems.map(
            (item, index) =>
              item.progress < item.listTodo.length && (
                <TodoItem
                  key={index}
                  item={item}
                  id={index}
                  action={onItemClicked}
                />
              )
          )}
        <br />
        {/* Render Completed Tasks */}
        <div className="BigTitle">
          <h1>Completed</h1>
        </div>
        <hr />
        {todoItems.length > 0 &&
          todoItems.map(
            (item, index) =>
              item.progress === item.listTodo.length && (
                <TodoItem
                  key={index}
                  item={item}
                  id={index}
                  action={onItemClicked}
                />
              )
          )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
