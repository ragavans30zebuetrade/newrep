function register()
{
    var first_name = document.getElementById("register_First_name").value;
    var last_name = document.getElementById("register_last_name").value;
    var mobile_number = document.getElementById("register_phone").value;
    var current_address = document.getElementById("register_Current_address").value;
    var permanent_address = document.getElementById("register_Permanent_address").value;
    var id_proof = document.getElementById("register_id_proof").value;
    var card_number = document.getElementById("register_proof_card_number").value;
    var email_address = document.getElementById("register_mail_address").value;
    var password = document.getElementById("register_password").value;
    var confirm_password = document.getElementById("register_confirm_password").value;
    // console.log("first name :",first_name);
    // console.log("last name :",last_name);
    // console.log("mobile number :",mobile_number);
    // console.log("current address :",current_address);
    // console.log("permanent address:",permanent_address);
    // console.log("id proof :",id_proof);
    // console.log("card number :",card_number);
    // console.log("email address :",email_address);
    // console.log("password :",password);
    // console.log("confirm password :",confirm_password);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "first name": first_name,
  "last name": last_name,
  "mobile number": mobile_number,
  "current address": current_address,
  "permanent address": permanent_address,
  "id proof": id_proof,
  "card number": card_number,
  "email address": email_address,
  "password": password,
  "confirm password": confirm_password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }