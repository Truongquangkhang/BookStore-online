import React from 'react';
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm';
const Data = [
    {
        id: 1,
        name: "KHANG"
    },
    {
        id:2,
        name:"TRUONG"
    }
]
const handleOnSubmit = ()=>{
    console.log("Submit");
}
function Todo() {
    return (
        <div>
            <TodoForm onSubmit={handleOnSubmit}></TodoForm>
            <TodoList List={Data}></TodoList>
        </div>
    );
}

export default Todo;