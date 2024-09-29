import './App.css'

import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill, BsMoonFill, BsSunFill } from 'react-icons/bs'

const API = 'http://localhost:5000'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: Math.random(),
      title,
      time,
      description,
      done: false,
    }
    // Adicionar a nova tarefa ao estado
    setTodos([...todos, todo])
    
    setTitle('')
    setTime('')
    setDescription('')
  }

  const handleToggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme)
  }, [isDarkTheme])

  return (
    <div className={`App gamer-theme ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className='todo-header'>
        <h1>Task Master 2.0</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>

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
              value={title || ''}
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
              value={description || ''}
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
              value={time || ''}
              required
            />
          </div>
          <input type='submit' value='Criar Tarefa' />
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de missões:</h2>
        {todos.length === 0 && <p>Não há missões ativas!</p>}
        {todos.map((todo) => (
          <div className={`todo ${todo.done ? 'completed' : ''}`} key={todo.id}>
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
        ))}
      </div>
    </div>
  )
}

export default App
