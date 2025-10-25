import React from 'react'

const TaskCard = ({tasks, onToggle}) => {
    function getPriorityColor(priority) {
        switch (priority) {
            case 'High':return 'text-red-600';
            case 'Mid':return 'text-yellow-500';
            case 'Low':return 'text-green-500';
            default: return 'text-gray-500';
        }
    }
    return (
        <div className='w-full bg-white myshadow rounded-xl px-6 py-4 mb-4'>
            <div className='flex items-center'>
                <input className='mr-6 accent-sky-700 text-white scale-250' type='checkbox' checked={tasks.isDone} onChange={onToggle} />
                <div className='w-full'>
                    <div className='w-full flex flex-row justify-between mb-1'>
                        <h2 className='text-2xl'>{tasks.title}</h2>
                        <p className={getPriorityColor(tasks.priority)}>{tasks.priority}</p>
                    </div>
                    <div className='w-full flex flex-row justify-between mb-1'>
                        <p className='text-sm text-gray-500'>{tasks.desc}</p>
                        <p className='text-sm text-gray-500'>Due to {tasks.dueDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskCard
