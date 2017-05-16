var nodemailer = require('nodemailer');
var config = require('./config');
//配置邮件
var config_email={
  host: "smtp.163.com",
  port:25,
  auth: {
      user: 'greece_gls@163.com',
      pass: 'XXXXXXXXX',    //此处写授权码
  }
};
var transporter = nodemailer.createTransport(config_email);
//发送邮件
var sendmail = function(who,subject,html){
    var option = {
        from:"greece_gls@163.com",
        to:who
    };
    option.subject = subject;
    option.html= html;
    option.attachments= [
      {
        filename : '前端-北邮-XXX.pdf',
        path: 'C:/Users/Greece/Desktop/求职相关/前端-北邮-XXX.pdf'
      }
    ];
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("fail: " + error);
        }else{
            console.log("success: " + response.message);
        }
    });
};
//调用发送邮件
sendmail(config.mailto,config.subject,config.html);
