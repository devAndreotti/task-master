// Importação dos estilos e componentes necessários
import './App.css'

// Importação dos hooks do React e dos ícones
import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill, BsMoonFill, BsSunFill } from 'react-icons/bs'

// URL da API (não utilizada no código atual)
const API = 'http://localhost:5000'

function App() {
  // Estados para gerenciar os inputs do formulário
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  
  // Estado para armazenar a lista de tarefas
  const [todos, setTodos] = useState([])
  
  // Estado para controlar o carregamento (não utilizado no código atual)
  const [loading, setLoading] = useState(false)
  
  // Estado para controlar o tema (claro/escuro)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Cria um novo objeto de tarefa
    const todo = {
      id: Math.random(),
      title,
      time,
      description,
      done: false,
    }
    
    // Adiciona a nova tarefa ao estado
    setTodos([...todos, todo])
    
    // Limpa os campos do formulário
    setTitle('')
    setTime('')
    setDescription('')
  }

  // Função para alternar o status de conclusão de uma tarefa
  const handleToggleDone = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  // Função para excluir uma tarefa
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Função para alternar entre os temas claro e escuro
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // Efeito para aplicar o tema ao body do documento
  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkTheme)
  }, [isDarkTheme])

  return (
    <div className={`App gamer-theme ${isDarkTheme ? 'dark' : 'light'}`}>
      {/* Cabeçalho da aplicação */}
      <div className='todo-header'>
        <h1>Task Master 2.0</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>

      {/* Formulário para adicionar novas tarefas */}
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

      {/* Lista de tarefas */}
      <div className='list-todo'>
        <h2>Lista de missões:</h2>
        {todos.length === 0 && <p>Não há missões ativas!</p>}
        {todos.map((todo) => (
          <div className={`todo ${todo.done ? 'completed' : ''}`} key={todo.id}>
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Tempo estimado: {todo.time} horas</p>
            <div className="actions">
              {/* Botão para marcar/desmarcar tarefa como concluída */}
              <span onClick={() => handleToggleDone(todo.id)} className="action-btn">
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              {/* Botão para excluir tarefa */}
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
