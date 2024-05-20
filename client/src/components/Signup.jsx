import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
function Signup() {
  const [time, setTime] = useState('9:00 AM')
  const {username} = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/client/update/'+username, {time})
    .then(res => {
      if(res.data.updated) {
        console.log(res)
      }
      else {
        console.log(res)
      }
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Schedule pickup</h1>
      
      <label htmlFor="time">Please select a time to pick up food on Saturday, June 15:</label>
      <select name="time" id='time'
            onChange={(e) => setTime(e.target.value)}>
            <option value="9:00">9:00 AM</option>
            <option value="9:10">9:10 AM</option>
            <option value="9:20">9:20 AM</option>
            <option value="9:30">9:30 AM</option>
            <option value="9:40">9:40 AM</option>
            <option value="9:50">9:50 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="10:10">10:10 AM</option>
            <option value="10:20">10:20 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="10:40">10:40 AM</option>
            <option value="10:50">10:50 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:10">11:10 AM</option>
            <option value="11:20">11:20 AM</option>
            <option value="11:30">11:30 AM</option>
      </select>
      <button onClick={handleSubmit}>Select time</button>
    </div>
  );
    
};

export default Signup;