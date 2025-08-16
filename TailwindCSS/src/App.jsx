import AddTodo from "./componenets/AddTodo"
import TodoAppName from "./componenets/TodoAppName"
import TodoList from "./componenets/TodoList"

const App = () => {
  return (
    <>
      <TodoAppName />
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App