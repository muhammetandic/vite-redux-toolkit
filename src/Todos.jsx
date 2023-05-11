import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from './services/todos';

const Todos = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo, response] = useDeleteTodoMutation();
  const [addTodo, addResponse] = useAddTodoMutation();
  const [task, setTask] = useState('');

  const handleAdd = (e) => {
    addTodo({
      id: nanoid(),
      task: task,
      isCompleted: false,
    });
    setTask('');
  };

  const handleDelete = (id) => () => {
    deleteTodo(id);
  };
  return (
    <div>
      {error && <div>Error when data is loading...</div>}
      {isLoading && <div>Loading...</div>}

      <div>
        <form>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAdd}>Ekle</button>
        </form>
      </div>
      <div style={{ textAlign: 'left' }}>
        <ol>
          {data &&
            data.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                <button
                  style={{ cursor: 'pointer', marginLeft: '.5rem' }}
                  onClick={handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Todos;
