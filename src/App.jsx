import { useState } from 'react'

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

import './App.css';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar nova lista de projetos para o portfolio",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Organizar itens da academia para levar para a CDS",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Utilizar essa pagina para utilizar no trabalho",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }
    ]

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
