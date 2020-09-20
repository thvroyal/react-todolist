import React, { useState } from "react";

export const TodoContext = React.createContext(null);

export const TodoProvider = (props) => {
  const data = [
    {
      title: "Saleforce account",
      progress: 1,
      listTodo: [
        {
          _id: "0_0",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: true,
        },
        {
          _id: "0_1",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "prototype",
          isComplete: false,
        },
        {
          _id: "0_2",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: false,
        },
        {
          _id: "0_3",
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
          _id: "1_0",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: true,
        },
        {
          _id: "1_1",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "prototype",
          isComplete: false,
        },
        {
          _id: "1_2",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: false,
        },
        {
          _id: "1_3",
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
          _id: "2_0",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: true,
        },
        {
          _id: "2_1",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "prototype",
          isComplete: false,
        },
        {
          _id: "2_2",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: false,
        },
        {
          _id: "2_3",
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
          _id: "3_0",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: true,
        },
        {
          _id: "3_1",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "prototype",
          isComplete: false,
        },
        {
          _id: "3_2",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: false,
        },
        {
          _id: "3_3",
          itemTitle: "Lorem ipsum dolor sit amet, consecutor elit",
          category: "design",
          isComplete: false,
        },
      ],
    },
  ];

  const [todoItems, updateTodoItems] = useState(data);
  const onItemClicked = (item) => {
    const index = parseInt(item._id.split("_")[0]); //get index of ancestor
    const indexChild = parseInt(item._id.split("_")[1]); //get index of nest

    const isComplete = todoItems[index].listTodo[indexChild].isComplete; //Get item child
    //update progress
    let currentProgress = todoItems[index].listTodo.reduce((done, next) => {
      if (next.isComplete) return done + 1;
      return done;
    }, 0);
    if (isComplete) currentProgress -= 1;
    else ++currentProgress;
    //update state
    updateTodoItems([
      ...todoItems.slice(0, index),
      {
        title: todoItems[index].title,
        progress: currentProgress,
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
    ]);
  };
  return (
    <TodoContext.Provider
      value={{
        todoItems,
        onItemClicked,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
