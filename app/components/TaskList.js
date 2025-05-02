export default function TaskList({tasks}) {
    return(
        <ul>
          {tasks.map((task, index) => (
        <li key={index} className="border p-2 rounded">
            {task}
            </li>
        ))}

        </ul>
       
    )
}