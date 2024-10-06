import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !time) return;
    
    addTodo({
      id: Math.random(),
      title,
      description,
      time,
      done: false
    });

    setTitle('');
    setDescription('');
    setTime('');
  };

  return (
    <div className='form-todo'>
      <p>Insira a próxima missão:</p>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='title'>O que você vai fazer?</label>
          <input
            type='text'
            name='title'
            placeholder='Titulo da tarefa'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        <div className='form-control'>
          <label htmlFor='description'>Descrição:</label>
          <input
            type='text'
            name='description'
            placeholder='Descreva a tarefa'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </div>

        <div className='form-control'>
          <label htmlFor='time'>Duração:</label>
          <input
            type='text'
            name='time'
            placeholder='Tempo estimado (em horas)'
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </div>
        <input type='submit' value='Criar Tarefa' />
      </form>
    </div>
  );
}

export default TodoForm;
