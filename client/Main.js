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
      console.log('this is state departments', this.state.departments)
    } catch (err){
      console.log(err)
    }
  }
  users(deptId){
    return axios.get(`/api/departments/${deptId}`)
      .then ((response)=> {
        this.setState({
          selectedDept: response.data
        },()=> console.log('updated', this.state.selectedDept))
      })
      .catch(err => console.log(err))
  }



  render() {
    let view;
    if(!this.state.selectedDept){
      view = <DepartmentsView departments={this.state.departments} selectedDept={this.users}/>
    } else {
      view = <SelectedDepartment department={this.state.selectedDept} />
    }

    return (

      <div id='app'>
        <div>
          <h1>Acme Users and Departments - React!</h1>
        </div>

        <div>
        {view}
        </div>

      </div>
    )
  }
}
