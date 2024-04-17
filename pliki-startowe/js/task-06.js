const fortnite = document.getElementById('validation-input');
const jajco60 = fortnite.getAttribute('data-length') *1;


fortnite.addEventListener('blur',function(){

   
    if(fortnite.value.length == jajco60){
        fortnite.classList.remove("invalid");
        fortnite.classList.add("valid");
    }
    else{
        fortnite.classList.remove("valid");
        fortnite.classList.add("invalid");
    }
    })