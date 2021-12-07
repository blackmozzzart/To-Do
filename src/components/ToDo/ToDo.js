import './ToDo.css'
export function ToDo(props) {
    console.log(props)
    const deleteToDo = () => {}
    return (
        <div className="wrapper">
            <li className='ToDo'>{props.text}</li>
            <button className='button' onClick={deleteToDo}>Удалить</button>
            <button className='button'>Редактировать</button>
        </div>
    )
}