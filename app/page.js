'use client';

import Image from "next/image";
import { useState } from "react";
import TaskList from "./components/TaskList";
export default function Home() {

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    const updateTasks = [...tasks, newTask]
    console.log(updateTasks)

    setTasks(updateTasks)
    console.log(updateTasks)
    setNewTask("")

  }

  return (

      <main className="p-20">
        <div className="flex gap-2 mb-4">
          <input className="border p-2 flex" value={newTask}
            onChange={e => setNewTask(e.target.value)} // ... and update the state variable on any edits!
          />
          <button className="px-2 bg-blue-400 text-white" type="button" onClick={addTask} >add</button>
        </div>
        <TaskList tasks={tasks}/>
      </main>
     
  );
}
