import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import ShinyButton from "@/components/magicui/shiny-button";

import "./App.css"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortMethod, setSortMethod] = useState("date");

  // Function to add a new task
  const addTask = (text, dueDate) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      dateAdded: new Date(),
      priority: 1,
      dueDate,
    };
    setTasks([...tasks, newTask]);
  };

  // Sort tasks based on the selected method (date or priority)
  const sortTasks = (tasks) => {
    if (sortMethod === "date") {
      return tasks.sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    } else if (sortMethod === "priority") {
      return tasks.sort((a, b) => b.priority - a.priority);
    }
    return tasks;
  };

  // Filter tasks based on their completion status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  // Get the sorted tasks after filtering
  const sortedTasks = sortTasks(filteredTasks);

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className="App container bg-blue-100 rounded-lg mx-auto p-4">
      <Header />
      <TodoInput addTask={addTask} />
      <FilterBar setFilter={setFilter} />
      <TodoList
        tasks={sortedTasks}
        toggleTask={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <div className="flex flex-col justify-center sm:flex-row   my-4">
        <button
          className="sm:w-1/3 w-full  p-2 rounded"
          onClick={() => setSortMethod("date")}
        >
          <ShinyButton className=" w-full" text="Sort by Date" />
        </button>
        <button
          onClick={() => setSortMethod("priority")}
          className="sm:w-1/3 p-2 rounded"
        >
          <ShinyButton className="w-full" text="Sort by Priority" />
          
        </button>
      </div>
    </div>
  );
}

export default App;
