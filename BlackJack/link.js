function Deal(min, max) {
        min = Math.ceil(1);
        max = Math.floor(11);
        var first = document.getElementById("display").innerHTML = Math.floor(Math.random() * (max - min)) + min;
        var second = document.getElementById("display2").innerHTML = Math.floor(Math.random() * (max - min)) + min;
        var Sum = first + second;
        document.getElementById("total").innerHTML = Sum;

    }

 /*    if (Deal().Sum > 21) {
        document.getElementById("total").innerHTML = "Bust";
    } else {
        document.getElementById("total").innerHTML = Sum;
    } */

function Hit(){
    min = Math.ceil(1);
        max = Math.floor(11);
        var third = document.getElementById("display3").innerHTML = Math.floor(Math.random() * (max - min)) + min;
        var newSum = first + second + third;
        document.getElementById("total").innerHTML = newSum;
}

function Stand(){
    alert("awaiting function")
}

function Double(){
    alert("awaiting function")
}

function Bet() {
    var x = document.getElementById("betEntry").value;
    document.getElementById("betAmount").innerHTML = x;
  }