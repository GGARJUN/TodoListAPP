import React, { useState } from "react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

function TodoInput({ addTask }) {

  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState("");


 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue, dueDate); // Pass input value and due date to the parent addTask function
      setInputValue(""); // Reset the input field after submission
      setDueDate(""); // Reset the due date field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row ">
      <input
        type="text"
        className="border mb-2 p-2 rounded sm:flex-grow"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="date"
        className="border mb-2 p-2 rounded sm:mx-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <AnimatedSubscribeButton
      buttonColor="#000000"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          Add Task{" "}
          <ChevronRightIcon className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 h-5 w-5" />
          Add Task{" "}
        </span>
      }
    />
    </form>
  );
}

export default TodoInput;
