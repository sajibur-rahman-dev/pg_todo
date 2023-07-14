import { applyMiddleware, createStore } from "redux";
import { todoMiddleware } from "../middlewares/todo_middleware";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = applyMiddleware(todoMiddleware);

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(middleware));

  return store;
};

export default configureStore;
