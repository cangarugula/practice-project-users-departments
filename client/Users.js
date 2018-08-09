import React from 'react'


export default Users = ({users})=> {
  users.map(user=> {
    return (
      <div>
        <ul>
          <li>{user.name} {user.department.name}</li>
        </ul>
      </div>
    )
  })
}

