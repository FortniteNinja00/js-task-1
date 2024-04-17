const jajco15 = document.getElementById('font-size-control');
const val = jajco15.value;
jajco15.addEventListener('input',function(){
    document.getElementById('text').style.fontSize=jajco15.value + 'px';
})