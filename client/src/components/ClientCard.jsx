import React from 'react'
import './css/ClientCard.css'

const ClientCard = ({client}) => {
    const {username, time, preferences} = client
    function prefString(prefObj) {
      let prefString = '';
        for (var property in prefObj) {
          if (typeof prefObj[property] != 'boolean')
            prefString += `${property}: ${prefObj[property]}\n`
          else {
            if (prefObj[property])
              prefString += '️✅'
            else
              prefString += '❌'
            let under = property.indexOf('_')
            if (under == -1)
              prefString += property + '\n'
            else
              prefString += `${property.substring(0, under)} ${property.substring(under + 1)}\n`
            }
        }
        return prefString
    }
    return (
    <div className = 'client-card' style={{border: '1px solid black', margin: '5px', padding: '5px'}}>
        <h3>{username}</h3>
        <p>{time}</p>
        <div className='preferences'>{prefString(preferences)}</div>
    </div>
  )
}

export default ClientCard