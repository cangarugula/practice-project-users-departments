import React from 'react'
import axios from 'axios'

const DepartmentsView = ({departments})=>{
  return (
    <ul>
    {departments.map(department=> {
      return <li>{department.name.toUpperCase()}</li>
    })}
    </ul>
  )
}

export default DepartmentsView
