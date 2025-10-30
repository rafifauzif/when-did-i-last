import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskCard = ({ tasks, onToggle, onEdit, onDelete }) => {

  function getPriority(index) {
    switch (index) {
      case 3: return 'High';
      case 2: return 'Mid';
      case 1: return 'Low';
      default: return 'error';
    }
  }

  function getPriorityColor(priority) {
    switch (priority) {
      case 3: return 'text-red-600';
      case 2: return 'text-yellow-500';
      case 1: return 'text-green-500';
      default: return 'text-gray-500';
    }
  }

  return (
    <div className="relative group w-full bg-white myshadow rounded-xl px-6 py-4 mb-4 transition-all duration-200 hover:shadow-md">
      {/* Hover action buttons */}
      <div className="absolute top-3 right-3 hidden group-hover:flex gap-2">
        <button
          onClick={() => onEdit(tasks)}
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(tasks.id)}
          className="text-gray-500 hover:text-red-600 transition-colors"
        >
          <FaTrash />
        </button>
      </div>

      <div className='flex items-center'>
        <input
          className='mr-6 accent-secondary text-white scale-250'
          type='checkbox'
          checked={tasks.is_done === 1}
          onChange={onToggle}
        />
        <div className='w-full'>
          <div className='w-full flex flex-row justify-between mb-1'>
            <h2 className='text-2xl'>{tasks.title}</h2>
            <p className={getPriorityColor(tasks.priority)}>{getPriority(tasks.priority)}</p>
          </div>
          <div className='w-full flex flex-row justify-between mb-1'>
            <p className='text-sm text-gray-500'>{tasks.description}</p>
            <p className='text-sm text-gray-500'>Due to {new Date(tasks.due_date).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
