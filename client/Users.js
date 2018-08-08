import React from 'react'

const Users = ({users})=> {
  return (
    users.map(user => {
      return (
        <div>
          <ul>
            <li key={user.id}>{user.name.toUpperCase()}</li>
          </ul>
          <hr/>
        </div>
      )
    })
  )
}

export default Users
