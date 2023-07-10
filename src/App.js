import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", priority: "high"},
    { name: "Clean Bathroom", priority: "low"},
    { name: "Car's MOT", priority: "high"},

  ])

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map(function(task, index){
    return <li key={index}>
            <span>
              {task.name}
            </span>
           </li>
  })

  const handleTaskInput = function(event){
    const value = event.target.value;
    setNewTask(value);
  }

  const handleFormSubmit = function(event){
    event.preventDefault();
    const task = {
      name: newTask,
      priority: "low"
    };

    const copyTasks = [...tasks]

    copyTasks.push(task);
    setTasks(copyTasks);
    setNewTask("");
  }

  return (
    <div className="App">
      <header className="App-header's">
        <h1>ToDo's</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Save Item"/>
      </form>
      <ul>
        {taskNodes}
      </ul>
    </div>
  );
}

export default App;
