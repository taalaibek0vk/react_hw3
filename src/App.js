import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodDo = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder='Пиши задачу!' value={inputValue} onChange={handleInputChange} />
      <button onClick={addTodDo}>Add</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;