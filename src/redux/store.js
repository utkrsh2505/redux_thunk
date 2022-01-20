import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { authReducer } from "./Auth/reducer";
import { reducer } from "./todos/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer
});

const thunkMiddleware = (store) => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
