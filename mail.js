const nodemailer = require('nodemailer');
const info = require("./config");




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: info.USER,
      pass: info.PASS
    }
  });


const sendMail=(email,name,subject,description, cb) =>{
    const mailOption = {
        from:email,
        to:'mwangijames6075@gmail.com',
        name: name,
        subject: subject,
        description: description
    };
    
    transporter.sendMail(mailOption, function(err, data){
        if(err){
            cb(err,null)
        }else{
            cb(null,data)
        }
    });
}
module.exports = sendMail;

