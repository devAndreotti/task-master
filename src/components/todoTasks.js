import React from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

function TodoTasks({ todo, handleToggleDone, handleDelete }) {
  return (
    <div className={`todo ${todo.done ? 'completed' : ''}`}>
      <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Tempo estimado: {todo.time} horas</p>
      <div className="actions">
        <span onClick={() => handleToggleDone(todo.id)} className="action-btn">
          {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
        </span>
        <span onClick={() => handleDelete(todo.id)} className="action-btn">
          <BsTrash />
        </span>
      </div>
    </div>
  );
}

export default TodoTasks;
