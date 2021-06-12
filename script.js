const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const button = document.querySelector('button');
const form = document.querySelector('form');


function validate(){
    let email = document.getElementById('email-input').value;
    let checker = regex.test(email);
    const message = document.getElementById("validation-msg");
    
    if (checker == false){
        message.style.display="block";
        document.getElementById('email-input').style.borderColor="red";
        document.getElementById('email-input').style.color="red";
    }

}