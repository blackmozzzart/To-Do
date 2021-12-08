import React, { useState } from 'react';


export function TodoInput(props) {
    const [newToDo, setNewToDo] = useState('');
    const onHandleChange = (event) => {
        setNewToDo(event.target.value)
    };

    const addToDo = (event) => {
        if (newToDo !== '') {
            props.updateTodoList((toDoList) => [...toDoList, newToDo]);
            setNewToDo('');
        }
    }

    return (
        <>
            <input type='text' value={newToDo} onChange={onHandleChange} />
            <button onClick={addToDo}>Подтвердить</button>
        </>
    )
}

