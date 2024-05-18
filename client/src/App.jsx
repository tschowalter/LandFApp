import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Books from './components/ClientSchedule'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddClient from './components/AddClient'
function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/addclient' element={<AddClient />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App