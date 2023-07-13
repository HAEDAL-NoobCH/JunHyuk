import './'
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  }

  return (
    <div className='App'>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">
            New item
          </label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
      </form>

      <h1 className="header">
        Todo List
      </h1>

      <button className='btn' onClick={handleAddTodo}>Add</button>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
            <input type="checkbox"></input>
            {todo}
            </label>
            <button className="btn btn-danger">
            Delete
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
