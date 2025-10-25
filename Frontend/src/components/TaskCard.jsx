import React from 'react'

const TaskCard = ({ taskName, lastDone, isDone, onToggle, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">

            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={onToggle}
                    className="w-5 h-5 accent-green-500 cursor-pointer"
                />
                <div>
                    <h3 className={`text-lg font-semibold ${isDone ? 'line-through text-gray-400' : ''}`}>
                        {taskName}
                    </h3>
                    <p className="text-sm text-gray-500">Last done: {lastDone}</p>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={onEdit}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Edit
                </button>
                <button
                    onClick={onDelete}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
export default TaskCard
