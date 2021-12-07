import './App.css';
import React from 'react';
import {ToDo} from './components/ToDo/ToDo'

function App() {
  const [newToDo, setNewToDo] = React.useState('');
  const onHandleChange = (event) => {
    setNewToDo(event.target.value)};
  // console.log(newToDo);
  const [toDoList, setToDoList] = React.useState(['Что нибудь?', 'Вспомнил?'])
  const addToDo = (event) => {
    if (newToDo !== '') {
      setToDoList([newToDo, ...toDoList])
      setNewToDo('')
    }
  }
  const deleteToDo = (event) => {
    console.log('deleteToDo')
  }
  return (
    <div className="App">
      <input type='text' value={newToDo} onChange={onHandleChange}/>
      <button onClick={addToDo}>Подтвердить</button>
      <ul>{toDoList.map((toDo, index) => {
        const key = toDo + '_' + index;
        // console.log(key);
        return (
          <ToDo text={toDo}/>
        )
      })}</ul>
    </div>
  );
}

export default App;