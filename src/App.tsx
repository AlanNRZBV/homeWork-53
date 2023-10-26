import { useState } from 'react';
import InputForm from './components/AddTaskForm.tsx';
import Task from './components/Task.tsx';

interface TaskItem {
  id: string;
  text: string;
}

const App = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const generateRndNumber = (): string => {
    const rndNumber = Math.floor(Math.random() * 1000);
    return String(rndNumber);
  };

  const addTask = (text: string) => {
    const id = generateRndNumber();
    const task = tasks.find((task) => task.id === id);

    if (task) {
      addTask(text);
    } else {
      setTasks([...tasks, { id: id, text: text }]);
    }
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <InputForm onSubmit={addTask} />
      <div className="row">
        {tasks.map((task) => {
          return <Task key={task.id} id={task.id} text={task.text} onDelete={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
