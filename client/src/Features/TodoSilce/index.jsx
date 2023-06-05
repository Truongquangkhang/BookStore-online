// 4. Using redux in component
// todo.jsx
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from './todoSlice'
import { Button } from 'bootstrap';
function Todos() {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todos);
  const handleTodoClickRemove = (todo, idx) => {
    const action = removePost(idx);
    dispatch(action);
  }
  const handleTodoClickAdd = (todo, idx) => {
    const action = removePost(idx);
    dispatch(action);
  }
  return (
    // <ul>
    //   {todoList.map((todo, idx) => (
    //     <li key={todo.id} onClick={() => handleTodoClick(todo, idx)}>
    //       {todo.title}
    //     </li>
    //   ))}
    // </ul>
    <>
    <input type='button' onClick={handleTodoClickAdd} value={"Add"} />
    <input type='button' onClick={handleTodoClickRemove} value={"Remove"}/>
    <h1>todoList.</h1>
    </>
  )
}

export default Todos