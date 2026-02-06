var img = document.querySelector('#photo');
var like = document.querySelector('#like');
var like_state = document.querySelector('#like-status');

img.addEventListener('dblclick', function(){
    like.style.opacity = 1;
    like.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(0deg)';

    setTimeout(function(){
        like.style.transform = 'translate(-50%, -300%) scale(1.5) rotate(60deg)';
    },800);
    setTimeout(function(){
        like.style.opacity = 0;
        like_state.style.color = 'crimson';
    },1000);
    setTimeout(function(){
        like.style.transform = 'translate(-50%, -50%) scale(1.5) rotate(-60deg)';
    },1200);
});
like_state.addEventListener('click', function(){
    like_state.style.color = 'black';
})