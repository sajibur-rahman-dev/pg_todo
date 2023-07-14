import { todoType } from "../reducers/types/todo_state";
import {TODO} from "./types";

export const reqTodo = () => {
    return {
        type:TODO.REQ_TODO
    } as const;
};

export const getTodo = (data:todoType) => {
    return {
        type:TODO.GET_TODO,
        payload:{
            data
        }
    } as const;
}


export type TodoActions = 
    | ReturnType<typeof reqTodo>
    | ReturnType<typeof getTodo>