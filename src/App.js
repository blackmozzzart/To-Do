import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [newToDo, setNewToDo] = React.useState('');
  const onHandleChange = (event) => {
    setNewToDo(event.target.value)};
  console.log(newToDo);
  const [toDoList, setToDoList] = React.useState(['Что нибудь?', 'Вспомнил?'])
  const onHandleClick = (event) => {
    if (newToDo !== '') {
      setToDoList([newToDo, ...toDoList])
      setNewToDo('')
    }
  }
  return (
    <div className="App">
      <input type='text' value={newToDo} onChange={onHandleChange}/>
      <button onClick={onHandleClick}>Подтвердить</button>
      <ul>{toDoList.map((toDo, index) => {
        const key = toDo + '_' + index;
        console.log(key);
        return (
          <li key={key}>{toDo}</li>
        )
      })}</ul>
    </div>
  );
}

export default App;