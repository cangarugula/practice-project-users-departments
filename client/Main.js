import React from 'react'
import axios from 'axios'
import DepartmentsView from './Departments'
import SelectedDepartment from './Department'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      departments: [],
      selectedDept: {}
    }
    this.users = this.users.bind(this)
  }

  async componentDidMount() {
    try{
      let response = await axios.get('/api/departments')
      let departments = response.data
      this.setState({
        departments: departments
      })
    } catch (err){
      console.log(err)
    }
  }
  async users(deptId){
    try{
      let response = await axios.get(`/api/departments/${deptId}`)
    this.setState({
      selectedDept: response.data
    })
    } catch (err){
      console.log(err)
    }
  }



  render() {

    return (
      <div id='app'>
        <div>
          <h1>Acme Users and Departments - React!</h1>
        </div>

        <div>
          {this.state.selectedDept.id ? <SelectedDepartment department={this.state.selectedDept}/> : (<DepartmentsView departments={this.state.departments} users={this.users} />)}
        </div>
      </div>
    )
  }
}
