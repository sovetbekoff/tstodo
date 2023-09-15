import React, { useState } from "react";

interface EditTodoProps {
  editedObj: Task;
  saveChanges: (newObj: Task) => void;
}

interface Task {
  task: string;
  status: boolean;
  id: number;
}

const EditTodo: React.FC<EditTodoProps> = ({ editedObj, saveChanges }) => {
  const [editedTodo, setEditedTodo] = useState<Task>(editedObj);

  function editTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setEditedTodo({
      ...editedTodo,
      task: e.target.value,
    });
  }

  function handleSaveChanges() {
    saveChanges(editedTodo);
  }

  return (
    <div>
      <h2>Edit todo</h2>
      <input type="text" onChange={editTodo} value={editedTodo.task} />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditTodo;
