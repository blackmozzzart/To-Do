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

  const deleteToDo = (elementToDelete) => {
    console.log('elementToDelete: ', elementToDelete);
    console.log('Моя функция для удаления из родителя', toDoList)

    const copyArray = [...toDoList].filter((item) => elementToDelete !== item);

    setToDoList(copyArray);
  };

  return (
    <div className="App">
      <input type='text' value={newToDo} onChange={onHandleChange}/>
      <button onClick={addToDo}>Подтвердить</button>
      <ul>{toDoList.map((toDo, index) => {
        const key = toDo + '_' + index;
        
        return (
          <ToDo key={key} text={toDo} color={'red'} deleteFunction={deleteToDo} />
          )
      })}</ul>
    </div>
  );
}


export default App;
