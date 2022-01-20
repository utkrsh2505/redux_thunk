import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/action";
const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addTodo(title));
  };
  return (
    <>
      <h1>TodoInput</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add something"
      />
      <button onClick={handleAdd}>ADD</button>
    </>
  );
};
export { TodoInput };
