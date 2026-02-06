var main = document.querySelector('main');
var btn = document.querySelector('button');
var h = document.querySelector('h1');

let quotes = ['You are enough.', 'Do it with a smile.', 'Bloom where you are planted.', 'Good things take time.', 'Be your own sunshine.', 'Start small, dream big.', 'Progress, not perfection.', 'You’ve got this.', 'Believe you can.','Let your light shine', 'Create your own magic.'  ];
let colors = ['#F9F8F6', '#EFE9E3', '#D9CFC7', '#C9B59C'];

main.addEventListener('mousemove', function(){

    var div = document.createElement('div');

    var x = Math.random()*100;
    var y = Math.random()*100;

    div.style.height = '200px';
    div.style.width = '200px';
    div.style.position = 'absolute';

    div.style.opacity = '0.5';
    div.style.transition = 'opacity 10s ease-out'
    div.style.backgroundImage = 'url(./images/background.gif)';
    div.style.backgroundSize = 'cover';
    div.style.styegroundPosition = 'center';

    div.style.left = x+'%';
    div.style.top = y+'%';

    main.appendChild(div);

    setTimeout(()=>{
        div.style.opacity = '0';

        setTimeout(()=>{
            div.remove();
        },700);

    },30);

    // console.log(div);
})

btn.addEventListener('click', function(){

    var h1 = document.createElement('h1');
    var a = Math.floor(Math.random()*quotes.length);
    var color = Math.floor(Math.random()*colors.length);
    // console.log(quotes[a]);
    h1.textContent = quotes[a];
    main.appendChild(h1);

    var x = Math.random()*100;
    var y = Math.random()*100;
    

    h1.style.position = 'absolute';
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.color = colors[color];
    

})