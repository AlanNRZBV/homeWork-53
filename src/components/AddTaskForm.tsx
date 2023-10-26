import React from 'react';

const InputForm = ()=>{

  const preventReload = (event: React.FormEvent)=>{
    event.preventDefault();
  }

  return(
    <form className="input-group mb-3 pt-5" onSubmit={preventReload}>
      <span className="input-group-text">Enter task here</span>
      <input type="text" className="form-control"/>
      <button className="btn btn-primary" type="submit" id="button-addon1">Submit</button>
    </form>
  )
}
export default InputForm