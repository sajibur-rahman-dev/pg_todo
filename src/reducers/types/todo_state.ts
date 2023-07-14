/* eslint-disable @typescript-eslint/no-empty-interface */
import { ReduxRequest } from "./redux_request";

export type todoType = [
    {
        title?:string,
        completed?:boolean
    }
];

export interface TodoState extends ReduxRequest<todoType>{}