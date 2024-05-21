/* Enormous citation for this MERN stack tutorial: https://www.youtube.com/watch?v=4sKkQ1WLHjQ&t=5434s&pp=ygUgY291ZGUgd2l0aCB5b3VzYWYgYm9va3N0b3JlIG1lcm4%3D
Almost all of the code is either copied from this tutorial or was written using concepts that I learned from following along with the tutorial.
You will see a commit called "debugged with chatGPT" — I used chatGPT two times while writing the code when I didn't understand why something wasn't working and I couldn't find answers on any forums to tell me what the problem was and what I could do to fix it. 
However, both times, the answer ended up appearing later on in the tutorial, so I replaced the implementated suggested by chatGPT with what I was seeing in the tutorial. 
Thus, all remaining code is either original, from the tutorial, or something I learned from a specific page/forum post which will be cited in an in-line comment.
*/

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
