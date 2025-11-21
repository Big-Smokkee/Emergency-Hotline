//function for incrementation of hearts and decrementing coins
function getElementValue(id) {
    return parseInt(document.getElementById(id).innerText);
}
function setElementValue(id, value) {
    document.getElementById(id).innerText = value;
}

let heartSpan = document.getElementsByClassName("heart-span");
let callSpan = document.getElementsByClassName("call-span");

let heartIncrementor = getElementValue("heart-incrementor");
let coinDecrementor = getElementValue("coin-decrementor");



for (const heart of heartSpan) {
    heart.addEventListener("click", function () {

        heartIncrementor = heartIncrementor + 1;
        setElementValue("heart-incrementor", heartIncrementor);
    })
}
for (const btn of callSpan) {
    btn.addEventListener("click", function () {
        if (coinDecrementor <= 0) {
            alert("Low Credit");
        }
        else {
            coinDecrementor -= 20;
            setElementValue("coin-decrementor", coinDecrementor);
            alert("done");
        }
    })
}
