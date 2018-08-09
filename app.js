const express = require('express')
const {User,Department,syncAndSeed} = require('./db')
const path = require('path')

const app = express()


app.get('/',(req,res,next)=> {
  res.sendFile(path.join(__dirname,'client','index.html'))
})

app.use('/dist',express.static(path.join(__dirname,'dist')))

app.get('/api/departments', async (req,res,next) => {
  try{
    let departments = await Department.findAll({
      include: [
        User
      ]
    })
    res.send(departments)
  } catch (err) {
    next(err)
  }
})

app.get(`/api/departments/:id`,async (req,res,next)=> {
  try{
    let department = await Department.findOne({
      where: {
        id: req.params.id
      },
      include: [
        User
      ]
    })
    res.send(department)
  } catch (err) {
    next(err)
  }
})

app.get('/api/users',async (req,res,next)=> {
  try{
    let users = await User.findAll({
      include: [Department]
    })
    res.send(users)
  } catch (err) { next(err)}
})

syncAndSeed()

module.exports = app
