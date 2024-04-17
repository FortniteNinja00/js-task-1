
let email = document.getElementsByName("email")[0];
let pass = document.getElementsByName("password")[0];


        class User{
             constructor(useremail,password){
                    this.Useremail = useremail;
                     this.Password = password;
              }
        }
document.querySelector(".login-form").addEventListener("submit", function(event) {
    c = 0;
    event.preventDefault(); 
    if(email.value.length == 0){    
        alert('Brakuje emaila');
        c++;
    }
    if(pass.value.length == 0){
        alert('Brakuje hasła');
        c++;
    }
    if(c == 0){
    
    let nigger = new User(email.value,pass.value);
    console.log('Mail: '+nigger.Useremail);
    console.log('Pass: '+nigger.Password);
    document.getElementsByClassName("login-form")[0].reset();
    }
});