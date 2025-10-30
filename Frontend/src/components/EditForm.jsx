import React, { useState, useEffect } from "react";
import api from "../api/server";

const EditForm = ({ task, onClose, onTaskSaved }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [priority, setPriority] = useState(2);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDesc(task.description);
      setPriority(task.priority);
      setDueDate(task.due_date.slice(0, 16)); // format for datetime-local
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) return; // safety check

    try {
      await api.put(`/tasks/${task.id}`, {
        title,
        description,
        priority,
        dueDate, // make sure backend expects snake_case if needed
      });
      alert("✅ Task updated successfully!");
      onTaskSaved();
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update task!");
    }
  };

  return (
    <div className="fixed bg-black/40 inset-0 z-50 backdrop-blur-xs flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-md px-10 py-7 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 text-2xl font-bold"
        >
          ✕
        </button>
        <h2 className="font-bold text-2xl mb-5">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Task Title */}
          <div className="mb-5">
            <p className="mb-2 text-sm font-medium">Task Title</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your task name"
              className="w-full py-3 px-3 rounded-lg border border-gray-300 outline-none"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-5">
            <p className="mb-2 text-sm font-medium">Description</p>
            <textarea
              value={description}
              onChange={(e) => setDesc(e.target.value)}
              rows={2}
              placeholder="Enter task description"
              className="w-full p-3 rounded-lg border border-gray-300 resize-none outline-none"
            />
          </div>
          {/* Priority & Due Date */}
          <div className="flex flex-wrap justify-between mb-5 gap-4">
            <div>
              <p className="mb-2 text-sm font-medium">Priority</p>
              <select
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
                className="p-3 rounded-lg border border-gray-300"
              >
                <option value={3} className="text-red-600">High</option>
                <option value={2} className="text-yellow-500">Mid</option>
                <option value={1} className="text-green-500">Low</option>
              </select>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Due Date</p>
              <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-secondary text-white font-bold rounded-xl text-xl hover:opacity-80 hover:scale-105 active:opacity-50 transition-all"
          >
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
