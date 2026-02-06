let arr = [
    {
        team:'CSK',
        name:'Chennai Super Kings',
        trophies:5,
        color1: "#f1fc19",
        color2: "#1d418c",
        logo:"./images/csk.png",
    },
    {
        team:'MI',
        name:'Mumbai Indians',
        trophies:5,
        color1: "#004283",
        color2: "#FFCC32",
        logo:"./images/mi.png",
    },
    {
        team:'RCB',
        name:'Royal Challengers Banglore',
        trophies:1,
        color1: "#D71921",
        color2: "#2D2D2D",
        logo:"./images/rcb.png",
    },
    {
        team:'SRH',
        name:'Sunrisers Hydrabad',
        trophies:1,
        color1: "#E61935",
        color2: "#FBA81A",
        logo:"./images/srh.png",
    },
    {
        team:'KKR',
        name:'Kolkata Knight Riders',
        trophies:3,
        color1: "#3A225D",
        color2: "#F2C02A",
        logo:"./images/kkr.png",
    },
    {
        team:'LSG',
        name:'Lucknow Super Giants',
        trophies:0,
        color1: "#11002E",
        color2: "#038000",
        logo:"./images/lsg.png",
    },
    {
        team:'PBKS',
        name:'Punjab Kings',
        trophies:0,
        color1: "#EE112E",
        color2: "silver",
        logo:"./images/pbks.png",
    },
    {
        team:'RR',
        name:'Rajasthan Royals',
        trophies:1,
        color1: "#EF0096",
        color2: "#002558",
        logo:"./images/rr.png",
    },
    {
        team:'GT',
        name:'Gujarat Titans',
        trophies:1,
        color1: "#49144C",
        color2: "#011C4A",
        logo:"./images/gt.png",
    },
]

var btn = document.querySelector('button');
var h3 = document.querySelector('h3');
var team_name = document.querySelector('#name');
var trophies = document.querySelector('#trophies');
var box = document.querySelector('#box');
var logo = document.querySelector('#teamLogo');

btn.addEventListener('click', function(){
    var winner = arr[Math.floor(Math.random()*arr.length)];

    box.style.border = 'none';
    h3.innerHTML = winner.team;
    team_name.innerHTML = winner.name;
    trophies.innerHTML = `<b>Total Titles : ${winner.trophies}</b>`;
    box.style.background = `linear-gradient(${winner.color1}, ${winner.color2})`;
    logo.src = winner.logo;
    // console.log(winner);

    

})