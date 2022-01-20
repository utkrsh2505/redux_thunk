import axios from "axios";
import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Login } from "../Components/Login";
import { loginUser } from "../redux/Auth/action";
import { Redirect } from "react-router-dom";
function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const handleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <div>
      <h1>login</h1>
      <Login handleLogin={handleLogin} />
    </div>
  );
}
export { LoginPage };
