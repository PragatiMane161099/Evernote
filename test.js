//const uuid = require('uuid')

//console.log(`uuid: ${uuid.v1()}`)

const mailer = require('nodemailer')

const transport = mailer.createTransport({
    service:'gmail',
    secure : true,
    port:  465,
    auth:{
        user:'pragati.mane.161099@gmail.com',
        pass: 'wpag qwld llqz rymc'
    }
})

transport.sendMail({
    from:'noreplymyevernote@gmail.com',
    to: "pragati.mane.161099@gmail.com",
    subject:"activate your account",
    html:`
    <h1>Welcome to evernote app</h1>
    <div>
    Please activate your account
    <div>
    <a href="http://localhost:4000/user/activate/">activate my account</a>
    </div>
    </div>
    `
},
  (error,result) =>{
    console.log(error)
    console.log(result)
  })

