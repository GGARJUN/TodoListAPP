import React, { useState } from "react";

function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // Handle editing the task text
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save the edited task
  const handleSave = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
    }
    setIsEditing(false);
  };

  // Cancel the edit operation
  const handleCancel = () => {
    setNewText(task.text); // Reset to the original text
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
      <div className="flex items-center">
        {/* Checkbox to toggle completion */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        
        {isEditing ? (
          // Input field for editing task text
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          // Display task text with conditional styling for completed tasks
          <span className={`${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.text} {task.dueDate && `(Due: ${task.dueDate})`}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            {/* Save button */}
            <button
              onClick={handleSave}
              className="bg-green-500 text-white p-1 rounded"
            >
              Save
            </button>
            {/* Cancel button */}
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white p-1 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            {/* Edit button */}
            <button
              onClick={handleEdit}
              className="bg-yellow-500 text-white p-1 rounded"
            >
              Edit
            </button>
            {/* Delete button */}
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
