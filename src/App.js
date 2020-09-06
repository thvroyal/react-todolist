import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
      {title: 'Go to School', isComplete: true},
      {title: 'Learn ReactJS', isComplete: false},
      {title: 'Play game', isComplete: false}
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
    return (
      <div className="App">
        <h1 className="text-header">My Todo-List</h1>
        {
          this.state.todoItems.length > 0 && this.state.todoItems.map((item,index) => 
            <TodoItem 
              key={index}
              item={item} 
              onClick={this.onItemClicked(item,index)} />
          )
        }
        {this.state.todoItems.length === 0 && 'Nothing here.'}
      </div>
    );
  }
}

export default App;
