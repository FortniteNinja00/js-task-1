let counterValue = 0;
const zmniejsz = document.querySelector('[data-action="decrement"]');
const zwieksz = document.querySelector('[data-action="increment"]');
const wartosc=document.getElementById('value');

zmniejsz.addEventListener("click",function(){
    counterValue--;
    wartosc.innerHTML=counterValue;
})
zwieksz.addEventListener("click",function(){
    counterValue++;
    wartosc.innerHTML=counterValue;
})