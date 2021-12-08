import './App.css';
import React from 'react';
import { ToDo } from './components/ToDo/ToDo'
import { TodoInput } from './components/TodoInput/TodoInput'

function App() {
  const [toDoList, setToDoList] = React.useState(['Что нибудь?', 'Вспомнил?'])

  const deleteToDo = (elementToDelete) => {
    console.log('elementToDelete: ', elementToDelete);
    console.log('Моя функция для удаления из родителя', toDoList)

    const copyArray = [...toDoList].filter((item) => elementToDelete !== item);

    setToDoList(copyArray);
  };

  return (
    <div className="App">
      <TodoInput updateTodoList={setToDoList} />
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
