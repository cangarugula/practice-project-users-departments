import React from 'react'
import axios from 'axios'
import DepartmentsView from './Departments'
import SelectedDepartment from './Department'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      departments: [],
      selectedDept: {},
      users: []
    }
    this.selectedDept = this.selectedDept.bind(this)
  }

  async componentDidMount() {
    try{
      let _departments = await axios.get('/api/departments')
      let departments = _departments.data
      let _users = await axios.get('/api/users')
      let users = _users.data
      this.setState({
        departments: departments,
        users: users
      })
    } catch (err){
      console.log(err)
    }
  }
  async selectedDept(deptId){
    try{
      let response = await axios.get(`/api/departments/${deptId}`)
      this.setState({
        selectedDept: response.data
      })
    } catch (err){
      console.log(err)
    }
  }

  // async users() {
  //   try{
  //     let response = await axios.get('/api/users')
  //     this.setState({
  //       users: response.data
  //     })
  //   } catch (err){
  //     console.log(err)
  //   }
  // }



  render() {

    return (
      <div id='app'>
        <div>
          <h1>Acme Users and Departments - React!</h1>
        </div>

        <div>
          {this.state.selectedDept.id ? <SelectedDepartment department={this.state.selectedDept}/> : (<DepartmentsView departments={this.state.departments} selectedDept={this.selectedDept} users={this.state.users} />)}
        </div>
      </div>
    )
  }
}
