let total = 0;  // Total number of people
let logArea = document.getElementById("log");

function enter(door) {
    total++;
    addLog(`Person entered through Door ${door}`);
    updateDisplay();
}

function exit(door) {
    if (total > 0) {
        total--;
        addLog(`Person exited through Door ${door}`);
    } else {
        addLog(`No one inside to exit!`);
    }
    updateDisplay();
}

function addLog(message) {
    let p = document.createElement("p");
    p.textContent = message;
    logArea.appendChild(p);
    logArea.scrollTop = logArea.scrollHeight;  // auto scroll
}

function updateDisplay() {
    document.getElementById("count").textContent = `Total People: ${total}`;
}
