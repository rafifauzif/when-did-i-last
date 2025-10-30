import React, { useEffect, useState } from 'react'
import api from '../api/server'

const AddNew = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')
  const [priority, setPriority] = useState(2)
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await api.post('/tasks', { title, description, priority, dueDate })
    console.log('✅ Task added:', res.data)


    if (onTaskAdded) {
      await onTaskAdded()
    }

    setShowForm(false)
    setTitle('')
    setDesc('')
    setPriority(2)
    setDueDate('')

    alert('✅ Task added successfully!')
  } catch (err) {
    console.error('❌ Failed to add task:', err)
    alert('❌ Failed to add task.')
  }
}

  const [showForm, setShowForm] = useState(false)
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showForm])
  return (
    <div>
      <button
        className="fixed right-5 md:right-10 xl:right-20 bottom-20 px-4 pb-2.5 pt-1 text-white text-5xl bg-primary rounded-full hover:scale-105 active:opacity-70 transition-all duration-150 "
        onClick={() => setShowForm(true)}
      >
        +
      </button>
      {showForm && (
        <div className="fixed bg-black/40 inset-0 z-50 backdrop-blur-xs ">
          <div className="fixed rounded-xl right-100 left-100 top-30 bottom-30 px-10 py-7 bg-white shadow-md z-100">
            <div className="relative max-w-full max-h-full">
              <button
                onClick={() => setShowForm(false)}
                className="text-2xl font-bold absolute -right-8 -top-5"
              >
                <svg
                  fill="#000000"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 460.775 460.775"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{' '}
                  </g>
                </svg>
              </button>
              <h2 className="font-bold text-2xl border-b-black mb-5">Add New Task</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <p className="mb-2 text-sm font-medium">Task Title</p>
                  <div className="flex pl-3 rounded-lg border border-gray-300">
                    <input
                      type="text"
                      value={title}
                      onChange={e => {
                        setTitle(e.target.value)
                      }}
                      placeholder="Enter your task name"
                      name="task-title"
                      className="w-full py-3 text-sm outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-sm font-medium">Task Description</p>
                  <textarea
                    name="desc"
                    value={description}
                    onChange={e => {
                      setDesc(e.target.value)
                    }}
                    rows={2}
                    placeholder="Enter your task description"
                    className="resize-none w-full p-3 text-sm outline-none rounded-lg border border-gray-300"
                  ></textarea>
                </div>
                <div className="flex flex-wrap justify-evenly mb-5">
                  <div className="mb-5 w-auto">
                    <p className="mb-2 text-sm font-medium" required>
                      Priority
                    </p>
                    <div className="flex p-3 rounded-lg border border-gray-300">
                      <select
                        value={priority}
                        onChange={e => {
                          setPriority(Number(e.target.value))
                        }}
                      >
                        <option className="text-red-600" value={3}>
                          High
                        </option>
                        <option className="text-yellow-500" value={2}>
                          Mid
                        </option>
                        <option className="text-green-500" value={1}>
                          Low
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-5 w-auto">
                    <p className="mb-2 text-sm font-medium">Due Date</p>
                    <div className="flex p-3 rounded-lg border border-gray-300">
                      <input
                        type="datetime-local"
                        className="outline-none"
                        name="due-date"
                        value={dueDate}
                        onChange={e => {
                          setDueDate(e.target.value)
                        }}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-secondary text-white font-bold rounded-xl text-xl cursor-pointer hover:opacity-80 hover:scale-105 active:opacity-50"
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default AddNew
