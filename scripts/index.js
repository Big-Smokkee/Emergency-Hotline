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

//heart incrementor
for (const heart of heartSpan) {
    console.log(heart);
    heart.addEventListener("click", function () {

        heartIncrementor = heartIncrementor + 1;
        setElementValue("heart-incrementor", heartIncrementor);
    })
}
//coin decrementor
for (const btn of callSpan) {
    btn.addEventListener("click", function () {

        // button er bap er baap hoilo 
        const card = btn.parentElement.parentElement;
        // service name
        const serviceName = card.querySelector("p").innerText;
        // phone number
        const phoneNumber = card.querySelector("h3.text-3xl").innerText;
        // history name
        const historyName = card.querySelector("h3.history-name");
        // history phone number

        // alert object
        const alertObject = {
            name: serviceName,
            contact: phoneNumber,
            date: new Date().toLocaleTimeString(),
        };
        // history object

        if (coinDecrementor <= 0) {
            alert("Low Credit");
        }
        else {
            coinDecrementor -= 20;
            setElementValue("coin-decrementor", coinDecrementor);
            alert(`Calling ${alertObject.name} ${alertObject.contact}`);

            //history
            const historyContainer = document.getElementById("history-container");
            // historyContainer.innerText = ""; 
            const div = document.createElement("div");
            div.className = "flex items-center justify-between px-4 py-3 mb-3 bg-[#FAFAFA] rounded-xl";
            div.innerHTML = `
                        <div>
                            <h4 id="history-heading" class=" hind-madurai-regular text-[18px]">${historyName.innerText}</h4>
                            <p id="history-time" class=" hind-madurai-regular text-[18px] text-gray-500">${alertObject.contact}</p>
                        </div>
                        <h2>${alertObject.date}</h2>`;
            historyContainer.appendChild(div);
        }
    })
}
