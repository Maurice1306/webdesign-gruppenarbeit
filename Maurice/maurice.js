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

nextButton.addEventListener("click", function(){
    aktuellerIndex++;

    if (aktuellerIndex >= slides.length) {
        aktuellerIndex = 0;
    }
    zeigeSlide (aktuellerIndex);
});

prevButton.addEventListener("click", function() {
    aktuellerIndex--;

    if (aktuellerIndex < 0) {
        aktuellerIndex = slides.length - 1;
    }
    zeigeSlide(aktuellerIndex);
});

zeigeSlide(aktuellerIndex);