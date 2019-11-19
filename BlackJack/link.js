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
    alert("awaiting function")
}

function Stand(){
    alert("awaiting function")
}

function Double(){
    alert("awaiting function")
}

if (Sum>21) {
    alert(bust)
}