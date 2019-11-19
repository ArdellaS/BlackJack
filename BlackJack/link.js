function Deal(min, max) {
        min = Math.ceil(1);
        max = Math.floor(10);
        document.getElementById("display").innerHTML = Math.floor(Math.random() * (max - min)) + min;
        document.getElementById("display2").innerHTML = Math.floor(Math.random() * (max - min)) + min;
}

function Hit(){
    alert("awaiting function")
}

function Stand(){
    alert("awaiting function")
}

function Double(){
    alert("awaiting function")
}