
function register(){
    
let num=prompt("enter your mobile no");
let email=prompt("enter your email");
let value=confirm(`please confirm the mobile number:${num}
email: ${email}`);
console.log(value);

if(value ==true){
    alert("Registeration successful");
}
else if(value ==false){
    alert("registeration unsccessful");
}

}

