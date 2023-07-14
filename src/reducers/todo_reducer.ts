/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoActions } from "../actions/todo_actions";
import { TODO } from "../actions/types";
import { AuthState } from "./types/auth_state";

const initialState = {
  data: [],
  request: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoActions
): AuthState => {
  switch (action.type) {
    case TODO.REQ_TODO:
      return {
        ...state,
        data: [],
        request: true,
        success: false,
        failed: false,
      };
    case TODO.GET_TODO: {
      const { payload } = action as any;

      return {
        ...state,
        data: payload.data,
        request: false,
        success: true,
        failed: false,
      };
    }

    default:
      return {
        data: [],
        request: false,
      };
  }
};
