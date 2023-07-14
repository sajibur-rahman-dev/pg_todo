import { useDispatch } from "react-redux";
import { TodoState, todoType } from "../reducers/types/todo_state";
import { useEffect } from "react";
import { getReqTodo } from "../actions/todo_actions";
import { useAppSelector } from "../helpers/redux";
import { getTodoState } from "../selectors/todo_selector";

interface UseTodo {
  request: boolean;
  todo?: todoType;
}

export const useTodo = (): UseTodo => {
  const dispatch = useDispatch();
  const resData = useAppSelector<TodoState>(getTodoState);
  const { data, request } = resData;
  useEffect(() => {
    dispatch(getReqTodo());
  }, [dispatch]);

  return {
    todo: data,
    request,
  };
};
