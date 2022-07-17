var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber>0) {
        document.getElementById("currentNumber").style.color = "yellow";
    }
    if (currentNumber===0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber<0) {
        document.getElementById("currentNumber").style.color = "red";
    }
    if (currentNumber===0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}
function zerar() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber===0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}

document.getElementById("decrement").addEventListener("click",decrement);

document.getElementById("increment").addEventListener("click",increment);

document.getElementById("zerar").addEventListener("click",zerar);