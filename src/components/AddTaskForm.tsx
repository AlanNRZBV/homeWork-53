import React from 'react';
import { useState } from 'react';

interface InputFormProps {
  onSubmit: (text: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [taskText, setTaskText] = useState('');

  const preventReload = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(taskText);
    setTaskText('');
  };

  return (
    <form className="input-group mb-3 pt-5" onSubmit={preventReload}>
      <span className="input-group-text">Enter task here</span>
      <input
        type="text"
        className="form-control"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button className="btn btn-primary" type="submit" id="button-addon1">
        Submit
      </button>
    </form>
  );
};
export default InputForm;
