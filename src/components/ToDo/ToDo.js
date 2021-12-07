import PropTypes from 'prop-types'
import './ToDo.css'
export function ToDo(props) {
    // props - объект, с полями которые были переданы в роди
    console.log(props);
    
    const deleteToDo = () => {
        props.deleteFunction(props.text);
        // console.log('delete', props.text)
    }

    // TODO: сделать обработку пропсы цвета (color), чтобы цвет текста менялся если пропса передана
    return (
        <div className="wrapper">
            <li className='ToDo'>{props.text}</li>
            <button className='button' onClick={deleteToDo}>Удалить</button>
            <button className='button'>Редактировать</button>
        </div>
    )
}

ToDo.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
