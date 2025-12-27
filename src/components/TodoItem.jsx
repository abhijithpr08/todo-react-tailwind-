import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useTodo();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li className="flex justify-between items-center border p-2 rounded">
      {edit ? (
        <input
          className="border p-1 mr-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="flex gap-2">
        {edit ? (
          <button
            onClick={() => {
              updateTodo(todo.id, text);
              setEdit(false);
            }}
            className="text-green-600"
          >
            Save
          </button>
        ) : (
          <button onClick={() => setEdit(true)} className="text-blue-600">
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
