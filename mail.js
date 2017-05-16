var nodemailer = require('nodemailer');
var config = require('./config');
//配置邮件
var config_email={
  host: "smtp.163.com",
  port:25,
  auth: {
      user: 'greece_gls@163.com',
      pass: 'asdfghj123',
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
        filename : '前端-北邮-郭丽斯.pdf',
        path: 'C:/Users/Greece/Desktop/求职相关/前端-北邮-郭丽斯.pdf'
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
// sendmail("422704287@qq.com","实习-北邮-郭丽斯","您好！<br>"+
//        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是北京邮电大学电子与通信工程专业研二的学生郭丽斯，在北邮人论坛看到贵部门招聘前端实习生的帖子,想要应聘该岗位。<br>"+
//       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我在中国移动设计院有过为期一年的实习经历，担任前端后台实习生。实习期间开始学习前端相关知识，参与过多个项目的前端"+
//       "开发任务，项目主要利用bootstrap和jQuery完成。另外有过java后台开发经验，对前后端交互流程较为熟悉。项目之余也自学"+
//       "了原生JavaScript,HTML,CSS等前端基础知识，打下了比较扎实的前端基础知识。<br>"+
//     "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附上我的简历，请您查收。期待您的回复！电话：18810962203. <br>"+
// "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;郭丽斯");
