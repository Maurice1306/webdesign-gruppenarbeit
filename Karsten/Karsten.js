const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function drawTable() {
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Tisch
    ctx.fillStyle = "#2f6b4f";
    ctx.fillRect(0, 0, w, h);

    // Mitte
    ctx.fillStyle = "#f4f0e6";
    ctx.fillRect(275, 125, 250, 170);

    ctx.fillStyle = "#1d2925";
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Doppelkopf", 400, 205);

    // Spieler
    drawPlayer(400, 45, "Spieler 1");
    drawPlayer(735, 210, "Spieler 2");
    drawPlayer(400, 375, "Spieler 3");
    drawPlayer(65, 210, "Spieler 4");

    // Karten im Stich
    drawCard(335, 175, "♥");
    drawCard(430, 175, "♠");
}

function drawPlayer(x, y, label) {
    ctx.beginPath();
    ctx.arc(x, y, 48, 0, Math.PI * 2);
    ctx.fillStyle = "#f4f0e6";
    ctx.fill();
    ctx.strokeStyle = "#174a3a";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#1d2925";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + 6);
}

function drawCard(x, y, symbol) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, 55, 70);
    ctx.strokeStyle = "#1d2925";
    ctx.strokeRect(x, y, 55, 70);

    ctx.fillStyle = symbol === "♥" ? "#b51f35" : "#1d2925";
    ctx.font = "32px Arial";
    ctx.textAlign = "center";
    ctx.fillText(symbol, x + 27, y + 45);
}

drawTable();