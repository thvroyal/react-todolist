import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          title: "Saleforce account",
          progress: 1,
          listTodo: [
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: true,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "prototype",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
          ],
        },
        {
          title: "Create a portfolio",
          progress: 1,
          listTodo: [
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: true,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "prototype",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
          ],
        },
        {
          title: "Create a portfolio",
          progress: 1,
          listTodo: [
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: true,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "prototype",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
          ],
        },
        {
          title: "Create a portfolio",
          progress: 1,
          listTodo: [
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: true,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "prototype",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
            {
              itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
              category: "design",
              isComplete: false,
            },
          ],
        },
      ],
    };

    this.onItemClicked = this.onItemClicked.bind(this);
  }
  onItemClicked(index, indexChild) {
    return (event) => {
      const { todoItems } = this.state;
      const isComplete = todoItems[index].listTodo[indexChild].isComplete; // get item child
      let curProgress = todoItems[index].listTodo.reduce((done, next) => {
        if (next.isComplete) return done + 1;
        return done;
      }, 0);
      if (isComplete) --curProgress;
      else ++curProgress;
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            title: todoItems[index].title,
            progress: curProgress,
            listTodo: [
              ...todoItems[index].listTodo.slice(0, indexChild),
              {
                ...todoItems[index].listTodo[indexChild],
                isComplete: !isComplete,
              },
              ...todoItems[index].listTodo.slice(indexChild + 1),
            ],
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }
  render() {
    let { todoItems } = this.state;
    let totalUncomplete = 0;
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
          <div className="BigTitle">
            <h1>In Progress</h1>
            <div className="BigProgress">
              {done}/{totalUncomplete}
            </div>
          </div>
          <hr />
          {this.state.todoItems.length > 0 &&
            this.state.todoItems.map(
              (item, index) =>
                item.progress < item.listTodo.length && (
                  <TodoItem
                    key={index}
                    item={item}
                    id={index}
                    action={this.onItemClicked}
                  />
                )
            )}
          <br />
          <div className="BigTitle">
            <h1>Completed</h1>
          </div>
          <hr />
          {this.state.todoItems.length > 0 &&
            this.state.todoItems.map(
              (item, index) =>
                item.progress === item.listTodo.length && (
                  <TodoItem
                    key={index}
                    item={item}
                    id={index}
                    action={this.onItemClicked}
                  />
                )
            )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
