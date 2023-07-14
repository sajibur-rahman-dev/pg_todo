/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import { StoreType } from "../reducers/types";
import { TodoActions, getTodoSuccess } from "../actions/todo_actions";
import { TODO } from "../actions/types";
import { getTodo } from "../api/todo";

export const todoMiddleware: Middleware<Record<string, unknown>, StoreType> = ({
  dispatch,
}: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return async (action: TodoActions) => {
      const nextActions = next(action);
      switch (action.type) {
        case TODO.REQ_TODO:
          {
            try {
              const { data } = await getTodo();

              dispatch(getTodoSuccess(data));
            } catch (error) {
              console.log(error);
            }
          }

          break;
      }
      return nextActions;
    };
  };
};
