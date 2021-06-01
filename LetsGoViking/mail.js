// const mailBtn = document.querySelector("#sendMail");

// mailBtn.addEventListener("click", function(){
   
//     Email.send({
        
//         Host : "smtp.elasticemail.com",
//         Username : "johannesposse@gmail.com",
//         Password : "6B7ADAB750FBA2C91FB8E53C92A039FAA845",
//         To : 'johannesposse@gmail.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       msg => alert("message")
//     );  
// })

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "johannesposse@gmail.com",
        Password : "6B7ADAB750FBA2C91FB8E53C92A039FAA845",
        To : 'johannesposse@gmail.com',
        From : "johannesposse@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}