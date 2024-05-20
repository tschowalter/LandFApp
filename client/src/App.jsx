import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddClient from './components/AddClient'
import { useState } from "react"
import Logout from "./components/Logout"
import axios from 'axios'
import { useEffect } from 'react'
import Preferences from './components/Preferences'

function App() {
  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')

  axios.defaults.withCredentials = true
  useEffect(() => {
      axios.get('http://localhost:3000/auth/verify')
      .then(res => {
          if(res.data.login) {
              setRole(res.data.role)
              setUsername(res.data.username)
          } else {
              setRole('')
          }
      })
  }, [])

  return (
    <BrowserRouter>
      <Navbar role = {role} username = {username} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup/:username' element={<Signup />}></Route>
        <Route path='/preferences/:username' element={<Preferences />}></Route>
        <Route path='/login' element={<Login setRoleVar = {setRole} setUsernameVar = {setUsername} />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/addclient' element={<AddClient />}></Route>
        <Route path='/logout' element={<Logout setRole = {setRole}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
