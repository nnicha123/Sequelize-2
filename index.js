const db = require('./models')
const express = require('express')
const app = express()
const cors = require('cors')
const managerRoutes = require('./routes/Manager')
const branchRoutes = require('./routes/Branch')
const accountRoutes = require('./routes/Account')
const customerRoutes = require('./routes/Customer')
const ownRoutes = require('./routes/Owns')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/managers',managerRoutes)
app.use('/branches',branchRoutes)
app.use('/accounts',accountRoutes)
app.use('/customers',customerRoutes)
app.use('/owns',ownRoutes)

db.sequelize.sync().then(() => {
    app.listen(8000, () => console.log('Server is running at port 8000'))
})