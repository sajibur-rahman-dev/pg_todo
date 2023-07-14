import { todoType } from "../reducers/types/todo_state";
import {TODO} from "./types";

export const getReqTodo = () => {
    return {
        type:TODO.REQ_TODO
    } as const;
};

export const getTodoSuccess = (data:todoType) => {
    return {
        type:TODO.GET_TODO,
        payload:{
            data
        }
    } as const;
}


export type TodoActions = 
    | ReturnType<typeof getReqTodo>
    | ReturnType<typeof getTodoSuccess>