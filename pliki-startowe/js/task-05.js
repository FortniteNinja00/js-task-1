const imie = document.getElementById('name-input');

        imie.addEventListener('input', function () {
            if(imie.value < 1){
                 document.getElementById('name-output').innerHTML='Anonymous';
                }else{
                    document.getElementById('name-output').innerHTML=imie.value;
                }
});