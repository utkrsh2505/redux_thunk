import React from "react";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.app.todos);
  return (
    <>
      <h1>TodoList</h1>
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};
export { TodoList };
