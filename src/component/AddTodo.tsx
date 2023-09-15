import React, { useState } from "react";

interface AddTodoProps {
  handleTask: (newObj: Task) => void;
}

interface Task {
  task: string;
  status: boolean;
  id: number;
}

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [task, setTask] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  function handleAdd() {
    if (!task.trim()) {
      alert("Input is empty");
      return;
    }

    const newTask: Task = {
      task: task,
      status: false,
      id: Date.now(),
    };

    setTask("");
    props.handleTask(newTask);
  }

  return (
    <div>
      <h2>ADD TODO Component</h2>
      <input type="text" id="" onChange={handleInput} value={task} />
      <button onClick={handleAdd}>ADD</button>
      <p>{task} </p>
    </div>
  );
};

export default AddTodo;
