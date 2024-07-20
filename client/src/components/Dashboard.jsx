import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ClientCard from './ClientCard'


const Dashboard = () => {
  const [clients, setClients] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/client/clients')
    .then(res => {
      let sortedClients = []
      let clientsAtNine = []
      let clientsAtTen = []
      let clientsAtEleven = []
      let unregisteredClients = []
      for (let i = 0; i < res.data.length; i++) {
        let client = res.data[i]
        if (client.time.indexOf(':') == -1)
            unregisteredClients.push(client)
        else {
            let hour = client.time.substring(0,client.time.indexOf(':'))
            if (hour === '9')
            clientsAtNine.push(client)
            else if (hour === '10')
                clientsAtTen.push(client)
            else if (hour === '11')
                clientsAtEleven.push(client)
        }   
      }
      clientsAtNine = timeSort(clientsAtNine)
      clientsAtTen = timeSort(clientsAtTen)
      clientsAtEleven = timeSort(clientsAtEleven)
      unregisteredClients = alphSort(unregisteredClients)
      console.log(unregisteredClients)
      const arrays = [clientsAtNine, clientsAtTen, clientsAtEleven, unregisteredClients]
      for (var clientList of arrays)
        for (var client of clientList)
            sortedClients.push(client)
      setClients(sortedClients)
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

function timeSort(clientList) {
  let unsorted = true
  let i = 0
  while (unsorted) {
      unsorted = false
      if (i % 2 == 0) {
          for (let j = 0; j < clientList.length - 1; j++) {
              if (parseInt(clientList[j].time.substring(2, 4)) > parseInt(clientList[j + 1].time.substring(2, 4))) {
                  let temp = clientList[j]
                  clientList[j] = clientList[j + 1]
                  clientList[j + 1] = temp
                  unsorted = true
              }
          }
      }
      else {
          for (let j = clientList.length - 1; j > 0; j--) {
              if (parseInt(clientList[j].time.substring(2, 4)) < parseInt(clientList[j - 1].time.substring(2, 4))) {
                  let temp = clientList[j]
                  clientList[j] = clientList[j - 1]
                  clientList[j - 1] = temp
                  unsorted = true
              }
          }
      }
  }
  return clientList
}

function alphSort(clientList) {
  let unsorted = true
  let i = 0
  while (unsorted) {
      unsorted = false
      if (i % 2 == 0) {
          for (let j = 0; j < clientList.length - 1; j++) {
              if (clientList[j].username.charAt(0) > clientList[j + 1].username.charAt(0)) {
                  let temp = clientList[j]
                  clientList[j] = clientList[j + 1]
                  clientList[j + 1] = temp
                  unsorted = true
              }
          }
      }
      else {
          for (let j = clientList.length - 1; j > 0; j--) {
              if (clientList[j].username.charAt(0) < clientList[j - 1].username.charAt(0)) {
                  let temp = clientList[j]
                  clientList[j] = clientList[j - 1]
                  clientList[j - 1] = temp
                  unsorted = true
              }
          }
      }
  }
  return clientList
}

export default Dashboard