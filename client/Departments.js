import React from 'react'


const DepartmentsView = ({departments,users})=>{
  return (
    departments.map(department=> {
      return (
      <div>
        <ul>
        <li onClick={()=> users(department.id)}> {department.name.toUpperCase()} </li>
        </ul>
      </div>
      )
    })
  )
}

export default DepartmentsView
