import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        // adicionar ToDo
        addTodo(value, category)
        // Limpar os Campos
        setValue("");
        setCategory("");
    };

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Digite o Titulo'
                value={value} 
                onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm