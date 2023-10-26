import React from 'react';
interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = ({text})=>{
  return(
    <div className="card">
      <div className="card-body d-flex align-items-center">
        {text}
        <button className="btn btn-danger ms-auto" type="button">Delete</button>
      </div>
    </div>
  )
}
export default Task