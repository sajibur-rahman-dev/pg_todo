/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios  from "axios"

export const getTodo = ( async () => {
    try {
       const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
       const data = await res.data;
       return {
        data
       }

    } catch (error) {
        return {
            error
        }
    }
})()