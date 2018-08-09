import React from 'react'


const DepartmentsView = ({departments,selectedDept,users})=>{
  console.log(users)
  return (
    <div>
      <div>
      {departments.map(department=> {
        return (
        <div>
          <ul>
          <li onClick={()=> selectedDept(department.id)}> {department.name} {department.users.length} </li>
          </ul>
          <hr />
        </div>
        )
      })}
    </div>
    <div>
      {users.map(user=> {
        return (
          <div>
            <ul>
              <li key={user.id}>{user.name} {user.department.name}</li>
            </ul>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default DepartmentsView
