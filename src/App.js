import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
      {
        title: 'Saleforce account',
        progress: 3,
        listTodo: [
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'design',
            isComplete: true
          },
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'prototype',
            isComplete: false
          },
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'design',
            isComplete: false
          },
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'design',
            isComplete: false
          }
        ]
      },
      {
        title: 'Create a portfolio',
        progress: 0,
        listTodo: [
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'design',
            isComplete: true
          },
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'prototype',
            isComplete: false
          },
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'design',
            isComplete: false
          },
          {
            itemTitle:'Lorem ipsum dolor sit amet, consecutor elit',
            category: 'design',
            isComplete: false
          }
        ]
      }
     ]
    }

    this.onItemClicked = this.onItemClicked.bind(this);
  }
  onItemClicked(item,index) {
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state; 
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }
  render(){
    let {todoItems} = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="TodoApp">
          <div className="BigTitle">
            <h1>In Progress</h1>
            <div className="BigProgress">
              {
                todoItems.reduce((done,next) => done+next.progress ,0)
              }/{
                todoItems.reduce((done,next) => done+next.listTodo.length ,0)
              }
            </div>
          </div>
          <hr />
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item,index) => 
            <TodoItem 
              key={index}
              item={item} 
              onClick={this.onItemClicked(item,index)} />
          )
        }
        <br />
        <div className="BigTitle">
            <h1>Completed</h1>
            <div className="BigProgress">
              {
                todoItems.reduce((done,next) => done+next.progress ,0)
              }/{
                todoItems.reduce((done,next) => done+next.listTodo.length ,0)
              }
            </div>
          </div>
          <hr />
          {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item,index) => 
            <TodoItem 
              key={index}
              item={item} 
              onClick={this.onItemClicked(item,index)} />
          )
        }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
