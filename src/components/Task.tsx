import React from 'react';
interface TaskProps {
  text: string;
  id: string
  onDelete: (id: string)=> void
}

const Task: React.FC<TaskProps> = ({id, text, onDelete})=>{
  const deleteTask = () => {
    onDelete(id);
  };
  return(
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        {text}
        <button className="btn btn-danger ms-auto" type="button" onClick={deleteTask}>Delete</button>
      </div>
    </div>
  )
}
export default Task