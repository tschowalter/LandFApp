import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ClientCard from './ClientCard'


const Dashboard = () => {
  const [clients, setClients] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/client/clients')
    .then(res => {
      /*let clientsUnsorted = []
      let clientsAtNine = []
      let otherRegisteredClients = []
      for (let i = 0; i < res.data.length; i++) {
        let client = res.data[i]
        if (client.time.substring(0,1) === '9')
          clientsAtNine.push(client)
        else
          otherRegisteredClients.push(client)
      }
      clientsAtNine.sort()
      otherRegisteredClients.sort()
      for (var client in otherClients)
        clientsAtNine.push(client)
      setClients(clientsAtNine)
      console.log(clientsAtNine)*/
      setClients(res.data)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div className = "client-list">
      {
        clients.map(client => {
          return <ClientCard key={client.id} client = {client}></ClientCard>
        })
      }
    </div>
  )
}

export default Dashboard