import React from 'react'
import Users from './Users'

const SelectedDepartment = ({department})=> {
  return (
    <div>
      <div>
        <h3>{department.name.toUpperCase()}</h3>
        <hr/>
      </div>
      <div>
      {department.users.map(user => {
      return (
        <div>
          <ul>
            <li key={user.id}>{user.name.toUpperCase()}</li>
          </ul>
          <hr/>
        </div>
      )
    })}
      </div>
      <div>
        <a href='/'>Back</a>
      </div>
    </div>
  )
}

export default SelectedDepartment
