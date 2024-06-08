const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/:userId',(request,response) => {

    const {title, contents,userID} = request.body
    const statement = `insert into notes (title,contents,userId) values
    ('${title}','${contents}','${userID}')`
    db.query(statement, (error,result) => {
        response.send(utils.createResult(error,result))
    })
})  

router.get('/:userId',(request,response) => {

    const {userID} = request.body
    const statement = `select * from notes where userID = '${userID}'`
    db.query(statement, (error,result) => {
        response.send(utils.createResult(error,result))
    })
}) 

router.put('/:noteId',(request,response) => {

    const {title, contents,noteId} = request.body
    const statement = `update notes set title = '${title}', contents='${contents}'  where id = '${noteId}'`
    db.query(statement, (error,result) => {
        response.send(utils.createResult(error,result))
    })
}) 

router.delete('/:noteId',(request,response) => {

    const {noteId} = request.body
    const statement = `delete from notes where id = '${noteId}'`
    db.query(statement, (error,result) => {
        response.send(utils.createResult(error,result))
    })
}) 

module.exports = router