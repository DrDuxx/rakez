import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './Error'
import Home from './Home'
import List from './List'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/list" element={<List />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
