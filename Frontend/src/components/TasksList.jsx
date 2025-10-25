import React from 'react'
import TaskCard from './TaskCard'

const TasksList = () => {
    const tasksData = [
        {
            title: "nonton arsenal",
            desc:
                "Bismillah juara epl bro tahun ini, kalo bisa treble wakk",
            priority: "High",
            dueDate: "2025-10-26",
            isDone: true
        },
        {
            title: "nonton arsenal",
            desc:
                "Bismillah juara epl bro tahun ini, kalo bisa treble wakk",
            priority: "Mid",
            dueDate: "2025-10-26",
            isDone: false
        },
        {
            title: "nonton arsenal",
            desc:
                "Bismillah juara epl bro tahun ini, kalo bisa treble wakk",
            priority: "Low",
            dueDate: "2025-10-26",
            isDone: true
        }

    ];
    return (
        <div className='mb-8'>
            <h2 className='text-2xl font-medium'>Your Tasks</h2>
            {tasksData.map((task, index) => (
                    <TaskCard key={index} tasks={task} />
            ))}
        </div>
    )
}
export default TasksList
