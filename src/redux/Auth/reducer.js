import { loadData, saveData } from "../../utils/LocalStorage";
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";
const token = loadData("token");
const initState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false
};
const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        isLoading: false
      };
    }
    case LOGIN_SUCCESS: {
      saveData("token", payload);

      return {
        ...state,
        isAuth: true,
        token: payload,
        isError: false,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
export { authReducer };
