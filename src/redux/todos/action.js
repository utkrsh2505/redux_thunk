import axios from "axios";
import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS
} from "./actionTypes";
const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST
  };
};

const addTodoSuccess = (payload) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  };
};
const addTodoFailure = (error) => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error
  };
};
const addTodo = (paylaod) => (dispatch) => {
  dispatch(addTodoRequest());
  return axios
    .post("https://json-server-mocker-masai.herokuapp.com/tasks", {
      title: paylaod,
      status: false
    })
    .then((res) => {
      dispatch(addTodoSuccess(res.data));
      dispatch(getTodo());
    })
    .catch((err) => {
      dispatch(addTodoFailure(err));
    });
};

const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST
  };
};

const getTodoSuccess = (paylaod) => {
  return {
    type: GET_TODO_SUCCESS,
    paylaod
  };
};

const getTodoFailure = (error) => {
  return {
    type: GET_TODO_FAILURE,
    paylaod: error
  };
};

const getTodo = (paylaod) => (dispatch) => {
  dispatch(getTodoRequest());
  return axios
    .get("https://json-server-mocker-masai.herokuapp.com/tasks")
    .then((res) => {
      console.log("ge", res.data);
      dispatch(getTodoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getTodoFailure(err));
    });
};
export { addTodo, getTodo };
