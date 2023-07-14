import { useTodo } from "./hooks/useTodo"

function App() {
  const {todo} =  useTodo()

  console.log(todo?.length);
  
  return (
    <div>
      {
        todo?.map((item,index) => <div key={index}>{item.title}</div>)
      }
    </div>
  )
}

export default App
