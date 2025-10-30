import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Title from "./components/Title.jsx";
import TasksList from "./components/TasksList.jsx";

const App = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar />
      <Title title='Hello <user>' desc="You've done <number> task today" />
      <TasksList />
    </div>
  )
}

export default App
