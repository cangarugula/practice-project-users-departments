import React from 'react'
import Users from './Users'

const SelectedDepartment = ({department})=> {
  console.log('department', department)
  return (
    <div>
      <div>
        <h3>Name</h3>
        <hr/>
      </div>
      <div>
        <Users key={department.id} users={department.users} />
      </div>
      <div>
        Back
      </div>
    </div>
  )
}

export default SelectedDepartment
