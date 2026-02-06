var btn = document.querySelector('.bottom button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('#inner');
var reset_btn = document.querySelector('#reset button');

var grow = 0;
var interval = null; 

btn.addEventListener('click', function () {
    btn.style.pointerEvents = 'none';
    var num = 50 + Math.floor(Math.random() * 50);

    interval = setInterval(() => {
        grow++;
        h2.innerHTML = grow + '%';
        inner.style.width = grow + '%';

        if (grow >= 100) {
            clearInterval(interval);
        }
    }, num);

    setTimeout(() => {
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
    }, num * 100);
});

reset_btn.addEventListener('click', function () {
    
    clearInterval(interval);

    grow = 0;
    h2.innerHTML = '0%';
    inner.style.width = '0%';

    btn.innerHTML = 'Download';
    btn.style.opacity = 1;
    btn.style.pointerEvents = 'auto';
});
