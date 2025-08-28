// ######### heart count
const navHearts = document.getElementById("navHearts");

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-heart")) {
        navHearts.innerText = parseInt(navHearts.innerText) + 1;
    }
});


// ########## call button 

const navCoins = document.getElementById("navCoins");
const historyList = document.getElementById("historyList");

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("callBtn")) {
        let card = event.target.parentNode.parentNode;

        // service--number
        let serviceName = card.querySelector("h3").innerText;
        let number = card.querySelector("p.text-2xl").innerText;

        // check balance
        let coins = parseInt(navCoins.innerText);

        if (coins < 20) {
            alert("Not enough coins to make a call.");
            return;
        }

        // update coins

        navCoins.innerText = coins - 20;

        alert(`Calling ${serviceName} at ${number}`);


        // no call removing 

        const first = historyList.firstElementChild;
        if (historyList.innerText.trim() === "No calls yet." || historyList.innerText.trim() === "History Cleared.") {
            historyList.removeChild(first);
        }

        // add history 

        const li = document.createElement("li");
        li.className = "bg-gray-100 mt-4 p-2 rounded-xl text-sm flex justify-between items-center";

        const left = document.createElement("div");
        const name = document.createElement("p");
        name.className = "text-gray-900 font-semibold";
        name.innerText = serviceName;

        const num = document.createElement("p");
        num.className = "text-gray-500 text-xs";
        num.innerText = number;

        left.appendChild(name);
        left.appendChild(num);

        // time
        const timeEl = document.createElement("span");
        timeEl.className = "text-black text-xs";
        timeEl.innerText = new Date().toLocaleTimeString();

        li.appendChild(left);
        li.appendChild(timeEl);
        historyList.appendChild(li);
    }

});


// ########### clear button 

const clearBtn = document.getElementById("clearHistory");

clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";

    const placeholder = document.createElement("li");
    placeholder.className = "text-gray-400";
    placeholder.innerText = "History Cleared.";
    historyList.appendChild(placeholder);
});


// ########## challange copy

const navCopies = document.getElementById("navCopies");

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("copyBtn")) {
        //copy count
        navCopies.innerText = parseInt(navCopies.innerText) + 1;

        //copy number
        const card = event.target.parentNode.parentNode;
        const number = card.querySelector("p.text-2xl").innerText;
        navigator.clipboard.writeText(number);

        alert(`Copied ${number}`);
    }
});