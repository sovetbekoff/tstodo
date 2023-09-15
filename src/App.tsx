import React, { useState } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import EditTodo from "./component/Edit";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [editedObj, setEditedObj] = useState<Task | null>(null);

  interface Task {
    task: string;
    status: boolean;
    id: number;
  }

  function handleTask(newObj: Task) {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function deleteTask(id: number) {
    let delTodos = todos.filter((task) => task.id !== id);
    setTodos(delTodos);
  }

  function getEditedObj(id: number) {
    let oneObj = todos.find((item) => item.id === id);
    setEditedObj(oneObj || null);
  }

  function saveChanges(newObj: Task) {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }

  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList
        deleteTask={deleteTask}
        todos={todos}
        getEditedObj={getEditedObj}
      />
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
      ) : null}
    </div>
  );
};

export default App;
