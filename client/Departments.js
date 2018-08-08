import React from 'react'


const DepartmentsView = ({departments,selectedDept})=>{
  return (
    departments.map(department=> {
      return (
      <div>
        <ul onClick={()=> {selectedDept(department.id)}}>
        <li key={department.id}> {department.name.toUpperCase()} </li>
        </ul>
      </div>
      )
    })
  )
}

export default DepartmentsView
