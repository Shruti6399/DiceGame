// alert("Welcome to Dice Challenge")
var player1raw = prompt("Enter player 1 name");
var player2raw = prompt("Enter player 2 name");
var player1 = player1raw.slice(0,1).toUpperCase() + player1raw.slice(1 ,player1raw.length).toLowerCase();
var player2 = player2raw.slice(0,1).toUpperCase() + player2raw.slice(1 ,player2raw.length).toLowerCase();
document.querySelector(".p1").innerHTML = player1;
document.querySelector(".p2").innerHTML = player2;
 function random(){
     var n = Math.random();
     n = Math.floor(n * 6)+1;
     return n;
 }
 random();

var imagesArray = ["dice1.png" ,"dice2.png" ,"dice3.png",
                    "dice4.png","dice5.png" ,"dice6.png" ];

function displayimage(){
    var a = random();
    document.canvas.src = imagesArray[a-1];
    var b = random();
    document.canvas2.src = imagesArray[b-1]
    // alert(n);
    if(a>b){
        document.querySelector("h1").innerHTML = "👑" + player1 + " Wins";
    }
    else if(b>a){
        document.querySelector("h1").innerHTML = player2 + " Wins 👑";
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Draw!!!";
    }
}

