const slides = document.querySelectorAll(".haus-slide");
const punkte = document.querySelectorAll(".punkt");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let aktuellerIndex = 0;

function zeigeSlide(index) {
    slides.forEach(function(slide) {
        slide.classList.remove("active");
        });

    punkte.forEach(function(punkt) {
        punkt.classList.remove("active-punkt");
        });

    slides[index].classList.add("active");
    punkte[index].classList.add("active-punkt");
}

nextButton.addEventListener("click", function () {
    aktuellerIndex = (aktuellerIndex + 1) % slides.length;
    zeigeSlide(aktuellerIndex);
});

prevButton.addEventListener("click", function () {
    aktuellerIndex = (aktuellerIndex - 1 + slides.length) % slides.length;
    zeigeSlide(aktuellerIndex);
});


/*Canvas Erstellung*/ 

function zeichneHeiligtuemerSymbol(){
    const canvas = document.getElementById("heiligtuemerCanvas");

    if(!canvas){
        return;
    }

    const ctx = canvas.getContext("2d");

    const breite = canvas.width;
    const hoehe = canvas.height;

    ctx.clearRect(0, 0, breite, hoehe);

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#d3a625";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.shadowColor = "rgba(211, 166, 37, 0.8)";
    ctx.shadowBlur = 18;

    /*Dreieck zeichnen*/

    ctx.beginPath();
    ctx.moveTo(160, 35);
    ctx.lineTo(45, 275);
    ctx.lineTo(275, 275);
    ctx.closePath();
    ctx.stroke();

    /*Kreis zeichnen*/

    ctx.beginPath();
    ctx.arc(160, 203, 69, 0, Math.PI * 2);
    ctx.stroke();

    /*Senkrechte zeichnen*/

    ctx.beginPath();
    ctx.moveTo(160, 35);
    ctx.lineTo(160, 275);
    ctx.stroke();

}

zeichneHeiligtuemerSymbol();
