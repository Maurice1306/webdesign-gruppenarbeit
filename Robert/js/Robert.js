var canvas = document.getElementById("filmDiagramm");
var context = canvas.getContext("2d");


/* Einspielergebnisse in Millionen US-Dollar */
var wert1 = 19.8;
var wert2 = 28.3;
var wert3 = 231.4;
var wert4 = 395.8;
var wert5 = 239.6;
var wert6 = 292.9;


/* Kurze Filmtitel für das Diagramm */
var film1 = "Schloss";
var film2 = "Totoro";
var film3 = "Mononoke";
var film4 = "Chihiro";
var film5 = "Wandelndes";
var film6 = "Reiher";


var skalierung = 300 / 400;


/* Höhe der Balken berechnen */
var hoehe1 = wert1 * skalierung;
var hoehe2 = wert2 * skalierung;
var hoehe3 = wert3 * skalierung;
var hoehe4 = wert4 * skalierung;
var hoehe5 = wert5 * skalierung;
var hoehe6 = wert6 * skalierung;


/* Hilfslinien */
context.strokeStyle = "#4c243d";
context.lineWidth = 1;

context.beginPath();

context.moveTo(70, 275);
context.lineTo(750, 275);

context.moveTo(70, 200);
context.lineTo(750, 200);

context.moveTo(70, 125);
context.lineTo(750, 125);

context.moveTo(70, 50);
context.lineTo(750, 50);

context.stroke();


/* Achsen */
context.lineWidth = 2;

context.beginPath();

context.moveTo(70, 30);
context.lineTo(70, 350);

context.lineTo(750, 350);

context.stroke();


/* Balken */
context.fillStyle = "#d97941";

context.fillRect(95, 350 - hoehe1, 60, hoehe1);
context.fillRect(200, 350 - hoehe2, 60, hoehe2);
context.fillRect(305, 350 - hoehe3, 60, hoehe3);
context.fillRect(410, 350 - hoehe4, 60, hoehe4);
context.fillRect(515, 350 - hoehe5, 60, hoehe5);
context.fillRect(620, 350 - hoehe6, 60, hoehe6);


/* Beschriftungen */
context.fillStyle = "#1f2a24";
context.font = "14px Arial";
context.textAlign = "center";


/* Filmtitel */
context.fillText(film1, 125, 375);
context.fillText(film2, 230, 375);
context.fillText(film3, 335, 375);
context.fillText(film4, 440, 375);
context.fillText(film5, 545, 375);
context.fillText(film6, 650, 375);


/* Werte über den Balken */
context.fillText(wert1, 125, 350 - hoehe1 - 10);
context.fillText(wert2, 230, 350 - hoehe2 - 10);
context.fillText(wert3, 335, 350 - hoehe3 - 10);
context.fillText(wert4, 440, 350 - hoehe4 - 10);
context.fillText(wert5, 545, 350 - hoehe5 - 10);
context.fillText(wert6, 650, 350 - hoehe6 - 10);


/* Einheit */
context.textAlign = "left";
context.fillText("Mio. US-Dollar", 5, 20);


/* Werte der y-Achse */
context.textAlign = "right";

context.fillText("0", 55, 355);
context.fillText("100", 55, 280);
context.fillText("200", 55, 205);
context.fillText("300", 55, 130);
context.fillText("400", 55, 55);


/* Markierungen an der y-Achse */
context.beginPath();

context.moveTo(65, 350);
context.lineTo(75, 350);

context.moveTo(65, 275);
context.lineTo(75, 275);

context.moveTo(65, 200);
context.lineTo(75, 200);

context.moveTo(65, 125);
context.lineTo(75, 125);

context.moveTo(65, 50);
context.lineTo(75, 50);

context.stroke();

/* Webseite drucken oder als PDF speichern */
var pdfButton = document.getElementById("pdfButton");

pdfButton.addEventListener("click", function () 
{
    window.print();
});