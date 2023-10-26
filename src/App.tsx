import { useState } from 'react';
import InputForm from './components/AddTaskForm.tsx';
import Task from './components/Task.tsx';

const App = () => {

  const [tasks, setTasks]=useState<string[]>([])

  const addTask=(text:string)=>{
    setTasks([...tasks, text])
  }

  return (
    <div className="container">
      <InputForm onSubmit={addTask}/>
      <div className="row">
        {tasks.map((task,index)=>{
          return <Task key={index} text={task}/>
        })}
      </div>
    </div>
  );
};

export default App;
