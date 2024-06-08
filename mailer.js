//const uuid = require('uuid')

//console.log(`uuid: ${uuid.v1()}`)

const mailer = require('nodemailer')

function sendEmail(email,subject, body, callback){
    const transport = mailer.createTransport({
        service:'gmail',
        auth:{
            user:'pragati.mane.161099@gmail.com',
            pass: 'wpag qwld llqz rymc'
        }
    })
transport.sendMail({
    from:'noreplymyevernote@gmail.com',
    to: email,
    subject:subject,
    html: body
},callback)
}
module.exports = {
    sendEmail:sendEmail
}