import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}

        />
      ))}
    </ul>
  );
}

export default TodoList;
