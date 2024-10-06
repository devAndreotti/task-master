// Importação dos estilos e componentes necessários
import './styles/App.css'

// Importação dos hooks personalizados
import useTodo from './hooks/useTodo'
import useTheme from './hooks/useTheme'

// Importação dos componentes
import ThemeToggle from './components/themeToggle'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {
  const { todos, addTodo, toggleTodoDone, deleteTodo } = useTodo()
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <div className={`App gamer-theme ${isDarkTheme ? 'dark' : 'light'}`}>
      {/* Cabeçalho da aplicação */}
      <div className='todo-header'>
        <h1>Task Master 2.0</h1>
        <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>

      {/* Formulário para adicionar novas tarefas */}
      <TodoForm addTodo={addTodo} />

      {/* Lista de tarefas */}
      <TodoList 
        todos={todos}
        handleToggleDone={toggleTodoDone}
        handleDelete={deleteTodo}
      />
    </div>
  )
}

export default App
