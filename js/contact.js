var elasticToken = "34753042-b11b-4a1d-80e2-da50b4387c4e";
// var gmailToken = "3958110c-d50d-4b40-af30-65f9d29079a0";
var gmailToken = "cb72fe37-0762-40a2-911d-1a68e15e7d55";

console.log(document.cookie);

function send(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (email.includes("@") && email.split("@")[1].includes(".")){
    Email.send({
        SecureToken: gmailToken,
        To : 'moravrav@gmail.com',
        From : "moravrav@gmail.com",
        Subject : "New message by " + name,
        Body : "<b>Message:</b><br>" + message + "<br><br><b>Email:</b> " + email
    }).then(
      function after(message){
        if (message == "OK"){
          alert("Message successfully sent! Thanks for contacting me!");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        } else {
          alert("Message not sent, I'm working on fixing that!");
        }
      }
    );
  } else {
    alert("Please enter a valid E-Mail address!");
  }
}
