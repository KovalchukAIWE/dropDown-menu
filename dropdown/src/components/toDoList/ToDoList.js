import React from 'react';
import './ToDoList.css';

const ToDoList = ({todos, onDeleteTodo}) => (
    <ul className='ToDoList'>
        {todos.map(({id, text}) => 
            <li key={id} className='ToDoList__item'>
                <p className='ToDoList__text'>{text}</p>
                <button onClick={() => onDeleteTodo(id)} className='ToDoList__button'>delete</button>
            </li>)}
    </ul>
) 

export default ToDoList