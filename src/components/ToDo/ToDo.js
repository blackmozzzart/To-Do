import PropTypes from 'prop-types'
import { useState } from 'react';
import './ToDo.css'



export function ToDo(props) {
    const [hasInput, setHasInput] = useState(false);
    // props - объект, с полями которые были переданы в роди
    console.log(props);

    const deleteToDo = () => {
        props.deleteFunction(props.text);
        // console.log('delete', props.text);
    }

    const editTodo = () => {
        console.log('<---START--->');

        if (hasInput === true) {
            setHasInput(false);
        } else {
            setHasInput(true);
        }

        console.log('<---END--->');
    }

    // TODO: сделать обработку пропсы цвета (color), чтобы цвет текста менялся если пропса передана
    return (
        <div className="wrapper">
            {hasInput ? <input type="text" defaultValue={props.text} /> : <li className='ToDo'>{props.text}</li>}
            <button className='button' onClick={deleteToDo}>Удалить</button>
            <button className='button' onClick={editTodo}>{hasInput ? 'Сохранить' : 'Редактировать'}</button>
        </div>
    )
}

ToDo.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
