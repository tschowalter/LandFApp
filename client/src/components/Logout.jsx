import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Logout = ({setRole}) => {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/auth/logout')
    .then(res => {
        if(res.data.logout) {
            setRole('')
            navigate('/')
        }
    }).catch(err => console.log(err))
  })
}

export default Logout