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


        // alert object
        const alertObject = {
            name: serviceName,
            contact: phoneNumber,
            date: new Date().toLocaleTimeString(),
        };
        // history object

        if (coinDecrementor <= 0) {
            alert("❌আপনার যথেষ্ট কয়েন নেই। কল করতে কমপক্ষে ২০টা কয়েন লাগবে।");
        }
        else {
            coinDecrementor -= 20;
            setElementValue("coin-decrementor", coinDecrementor);
            alert(`📞 Calling ${alertObject.name} ${alertObject.contact}...`);

            //history
            const historyContainer = document.getElementById("history-container");
            // historyContainer.innerText = ""; 
            const div = document.createElement("div");
            div.className = "flex items-center justify-between px-4 py-3 mb-3 bg-[#FAFAFA] rounded-xl";
            div.innerHTML = `
                        <div>
                            <h4 id="history-heading" class="hind-madurai-semibold text-[16px]">${historyName.innerText}</h4>
                            <p id="history-time" class="hind-madurai-semibold text-[16px] text-gray-500">${alertObject.contact}</p>
                        </div>
                        <h2 class="hind-madurai-semibold">${alertObject.date}</h2>`;
            historyContainer.appendChild(div);
            //clear functionality
            document.getElementById("clr-btn").addEventListener("click", function () {
                historyContainer.innerText = "";
            })
        }
    })
}
document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        // 1. Find the parent card
        const card = btn.parentElement.parentElement;

        // 2. Find the target text to copy
        const target = card.querySelector(btn.dataset.copyTarget);

        // 3. Get text
        const text = target.innerText.trim();

        // 4. Copy using a simple trick
        navigator.clipboard.writeText(text)
            .then(() => {
                setTimeout(() => btn.innerHTML = `<span><i class="fa-regular fa-copy"></i></span>Copy`, 1200);
                alert("Copy success!");
                //coin er number
                let copyValue = getElementValue("copy-number");
                copyValue++;
                setElementValue("copy-number", copyValue);

            })
            .catch(() => {
                alert("Copy failed! Please try again.");
            });
    });
});
