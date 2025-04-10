import './TodosList.css'
const TodosList=(props)=>{
    let {Data,name}=props
    console.log(name)
    return(
        <table className='todo-table'>
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {Data.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed? "True" : "False"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TodosList