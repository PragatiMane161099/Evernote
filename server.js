const express = require('express')
const bodyparser = require('body-parser')
//import routes
const userRouter = require('./routes/user')
const noteRouter = require('./routes/notes')

const app = express()
app.use(bodyparser.json())
//add routes in app
app.use('/user',userRouter)
app.use('/notes',noteRouter)

app.listen(4000,'0.0.0.0',() => {
    console.log('Listeining on 4000')
})