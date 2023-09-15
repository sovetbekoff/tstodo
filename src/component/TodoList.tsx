import React from "react";

interface TodoListProps {
  todos: Task[];
  deleteTask: (id: number) => void;
  getEditedObj: (id: number) => void;
}

interface Task {
  task: string;
  status: boolean;
  id: number;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTask,
  getEditedObj,
}) => {
  return (
    <div>
      <h2>TODO List Component</h2>
      <ul style={{ color: "red", listStyleType: "none" }}>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid orange",
              borderRadius: "15px",
              margin: "10px",
              padding: "70px",
            }}
          >
            {item.task}
            <button
              onClick={() => deleteTask(item.id)}
              style={{
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "20px",
                marginLeft: "12px",
              }}
            >
              Delete
            </button>
            <button
              onClick={() => getEditedObj(item.id)}
              style={{
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "20px",
                marginLeft: "12px",
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
