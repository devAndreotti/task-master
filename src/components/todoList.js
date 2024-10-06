import React from 'react';
import TodoTasks from './todoTasks';

function TodoList({ todos, handleToggleDone, handleDelete }) {
  return (
    <div className='list-todo'>
      <h2>Lista de missões:</h2>
      {todos.length === 0 && <p>Não há missões ativas!</p>}
      {todos.map((todo) => (
        <TodoTasks 
          key={todo.id} 
          todo={todo} 
          handleToggleDone={handleToggleDone} 
          handleDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default TodoList;
