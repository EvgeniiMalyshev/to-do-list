const Header = ({allTask, completedTask, task}) => {
    return (
        <div className="header">
            <h1>To Do List:</h1>
            <h2>всего задач {allTask}, выполненных {completedTask}, предстоит выполнить {task}</h2>
        </div>
    )
}

export default Header