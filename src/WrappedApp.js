import React from "react";

import App from "./App";
import { TodoProvider } from "./contexts/TodoContext";

function WrappApp(props) {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

export default WrappApp;
