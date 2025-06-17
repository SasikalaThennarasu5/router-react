// components/Project2_TodoList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/actions/todoActions';

const Project2_TodoList = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos.todos); // state shape: { todos: { todos: [...] } }
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(
        addTodo({ id: Date.now(), text: task.trim(), completed: false })
      );
      setTask('');
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>📝 Redux Todo List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
        style={{ padding: '0.5rem', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Add
      </button>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: '0.5rem',
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: '1rem' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project2_TodoList;
