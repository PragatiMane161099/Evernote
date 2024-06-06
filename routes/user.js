const express = require('express')
const db = require('../db')
const utils = require('../utils')
const cryptoJs = require('crypto-js')
const uuid = require('uuid')
const router = express.Router()


router.post('/signup',(request,response) => {
    const {name, email, phone, address,password} = request.body
    const encrpswd = cryptoJs.SHA256(password)
    const activationToken = uuid.v1()
    const statement = `insert into user(name, email, phone, address,password,activationToken) 
    values('${name}','${email}','${phone}','${address}','${encrpswd}','${activationToken}')`

    db.query(statement,(error,result) => {
            response.send(utils.createResult(error,result))
        })
})

router.post('/signin',(request,response) => {
    const {email, password} = request.body
    const encrpswd = cryptoJs.SHA256(password)
    const statement = `select id,name, phone, address, active from user where email ='${email}' 
    and password = '${encrpswd}'`
    db.query(statement,(error,users) => {
        const result = {}
        if(error)
            {
                result['status'] = 'error'
                result['error'] = error
            }
            else
            {
                if(users.length == 0)
                    {
                result['status'] = 'error'
                result['error'] = 'User not found'
                    }
                    else{
                        const user = users[0]
                        if(user['active'] == 0)
                            {
                                result['status'] = 'error'
                                result['data'] = 'account not active'
                            }
                            else if(user['active'] == 1)
                            {
                                result['status'] = 'success'
                                result['data'] = 'account active' 
                            }
                    }
            }
            response.send(result)
        })
})
router.get('/activate/:token',(request,response) => {
    const {token} = request.params
    const statement = `update user set active = 1 where activationToken = '${token}'`
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})
module.exports = router