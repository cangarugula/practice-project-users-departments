import React from 'react'
import axios from 'axios'
import DepartmentsView from './Departments'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      departments: [],
      selectedDept: {}
    }
    this.Users = this.Users.bind(this)
  }

  async componentDidMount() {
    let response = await axios.get('/api/departments')
    let departments = response.data
    this.setState({
      departments: departments
    })
  }

  async Users(deptId){
    let response = await axios.get(`/api/departments/${deptId}`)
    let users = response.data
    this.setState({
      selectedDept: users
    })
  }

  render() {
    let view;
    if(!this.state.selectedDept){
      view = <DepartmentsView departments={this.state.departments}/>
    }
    return (

      <div id='app'>
        <div>
          <h1>Acme Users and Departments - React!</h1>
        </div>

        <div>
        <DepartmentsView departments={this.state.departments}/>
        </div>

      </div>
    )
  }
}
