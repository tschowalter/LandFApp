import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddClient = () => {
    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/client/register', {id, username, password})
        .then(res => { 
            if(res.data.registered) {
                alert(`Client ${username} registered`)
                navigate('/addclient')
            }
            console.log(res)
        }).catch(err => console.log(err))
    }
  return (
    <div className='client-form-container'>
        <form className='client-form' onSubmit={handleSubmit}>
            <h2>Add Client</h2>
            <div className='form-group'>
                <label htmlFor='id'>Client Id:</label>
                <input type='Number' id='id' name='id' 
                onChange={(e) => setId(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor='username'>Client Username:</label>
                <input type='text' id='username' name='username' 
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Client Password:</label>
                <input type='text' id='password' name='password' 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Create client account</button>
        </form>
    </div>
  )
}

export default AddClient