import React, { useEffect, useState } from "react";
import api from "../api/server";
import TaskCard from "./TaskCard";
import EditForm from "./EditForm";
import AddNew from "./AddNew";

const TasksList = () => {
  const [tasksData, setTasksData] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // task being edited
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasksData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      setTasksData((prev) => prev.filter((t) => t.id !== id));
      alert("✅ Task deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete task!");
    }
  };

  const handleToggle = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus ? 0 : 1;
      await api.patch(`/tasks/${id}/done`, { is_done: newStatus });
      setTasksData((prev) =>
        prev
          .map((t) => (t.id === id ? { ...t, is_done: newStatus } : t))
          .sort((a, b) => a.is_done - b.is_done)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  return (
    <>
      <AddNew onTaskAdded={fetchTasks} />
      <div className="mb-8">
        <h2 className="text-2xl font-medium mb-4">Your Tasks</h2>
        {tasksData.length > 0 ? (
          tasksData.map((task) => (
            <TaskCard
              key={task.id}
              tasks={task}
              onToggle={() => handleToggle(task.id, task.is_done)}
              onEdit={handleEdit}
              onDelete={() => handleDelete(task.id)}
            />
          ))
        ) : (
          <p className="text-gray-500">No tasks found.</p>
        )}
      </div>

      {showForm && (
        <EditForm
          task={editingTask}
          onClose={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
          onTaskSaved={fetchTasks}
        />
      )}
    </>
  );
};

export default TasksList;
