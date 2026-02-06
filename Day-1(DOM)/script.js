var h2 = document.querySelector('h2');
var inc = document.querySelector('#inc');
var dec = document.querySelector('#dec');

var a = 0;
inc.addEventListener('click', function(){
    h2.innerHTML = a;
    a++;
})
dec.addEventListener('click', function(){
    h2.innerHTML = a;
    a--;
})