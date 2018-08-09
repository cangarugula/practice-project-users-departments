const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost/users_practice_db',{logging: false})

const User = db.define('user',{
  name: {
    type: Sequelize.STRING
  }
})

const Department = db.define('department',{
  name: {
    type: Sequelize.STRING
  }
})


User.belongsTo(Department)
Department.hasMany(User)

const syncAndSeed = ()=> {
return db.sync({force:true})
  .then(()=> console.log('syncing the db'))
  .then(()=> seed())
  .then(()=> console.log('seeding the db'))
  .catch((err)=>console.log(err))
}

const seed = async()=> {
  const users = ['Moe', 'Larry','Curly']
  const departments = ['HR','Admin','Engineering']
  try{


      let [hr,admin,engineer] = await Promise.all(
        departments.map(department => {
          return Department.create({name: department})
        })
      )
      let [moe,larry,curly] = await Promise.all(
        users.map(user => {
        return User.create({name: user})
        })
      )
      await moe.setDepartment(hr)
      await larry.setDepartment(admin)
      await curly.setDepartment(hr)

      await [moe,larry,curly].forEach(user=> user.save())

  } catch (err){
    console.log(err)
  }
}

module.exports = {
  User,
  Department,
  syncAndSeed
}
