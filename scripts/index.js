const heartSpan = document.getElementsByClassName("heart-span");
console.log(heartSpan);
const heartIncrementor = document.getElementById("heart-incrementor");
console.log(heartIncrementor.innerText);
const coinDecrementor = document.getElementById("coin-decrementor");
console.log(coinDecrementor.innerText);

for (const heart of heartSpan) {
    heart.addEventListener("click", function () {
        heartIncrementor.innerText++;
        console.log(heartIncrementor.innerText);
    })
}
