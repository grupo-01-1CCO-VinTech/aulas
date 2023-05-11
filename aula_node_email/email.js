var nodemailer = require('nodemailer');

senha = '' //COLOQUE A SENHA DO SEU EMAIL AQUI

var transporter = nodemailer.createTransport({
  service: 'Outlook', //tipo de email como gmail, outlook, etc
  auth: {
    user: '', //aqui é onde você vai colocar seu email
    pass: String(senha) // senha já declarada antes
  }
});

//Json com as informações do email que tú vai enviar
var mailOptions_1 = {
  from: '', //A sua conta do email
  to: 'rafael.ranaudo@sptech.school', // para quem tú quer enviar
  subject: 'Sending Email using Node.js', // O titulo
  text: 'That was easy!' //o texto
};

//Json com as informações do email que tú vai enviar
var mailOptions_2 = {
  from: 'rafael.ranaudo@sptech.school', //A sua conta do email
  to: 'caetano.domingues@sptech.school, raphael.almeida@sptech.school', // para quem tú quer enviar, nesse caso se quiser 
  //enviar para mais de uma pessoa só separar por virgula
  subject: 'Jonas', //O titulo
  text: 'That was easy!' // Texto
}

var mailOptions_3 = {
  from: '', //A sua conta do email
  to: 'stephany.justino@sptech.school', // para quem tú quer enviar
  subject: 'Sending Email using Node.js', // O titulo
  html: '<h1>Welcome</h1><p>That was easy!</p>' //Aqui você pode passar o texto em formato de html mudando TEXT para html e passando uma string como um html
}

//Aqui é onde o email será enviado
transporter.sendMail(mailOptions_2/*Aqui é o json de mensagem que tú escolher*/ , function (error/*Aqui está devolvendo se algum erro ocorrer*/ , info/*Aqui a informação de foi enviado o email*/) {
  /*Se tiver um erro var dar true e mandar um erro no terminal*/ 
  if (error) {
    console.log(error);
  } 
  /*Caso contrário vai enviar o email*/ 
  else {
    console.log('Email sent: ' + info.response);
  }
});

