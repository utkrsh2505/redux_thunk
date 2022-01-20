import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { Redirect } from "react-router-dom";
import { getTodo } from "../redux/todos/action";

function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);
  return (
    <div>
      <h3>{token}</h3>
      <TodoInput />
      <TodoList />
    </div>
  );
}
export { Home };
