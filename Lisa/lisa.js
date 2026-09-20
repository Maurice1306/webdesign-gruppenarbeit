const canvas = document.getElementById('wappen');
const ctx = canvas.getContext('2d');

function SchildPfadAussen(ctx) {
    ctx.beginPath();
    ctx.moveTo(10, 15);
    ctx.lineTo(310, 15);
    ctx.lineTo(310, 260);
    ctx.quadraticCurveTo(310, 360, 160, 410);
    ctx.quadraticCurveTo(10, 360, 10, 260);
    ctx.closePath();
    
}
function SchildPfadInnen(ctx){
    ctx.beginPath();
    ctx.moveTo(40, 55);
    ctx.lineTo(280, 55);
    ctx.lineTo(280, 250);
    ctx.quadraticCurveTo(280, 330, 160, 360);
    ctx.quadraticCurveTo(40, 330, 40, 250);
    ctx.closePath();
}
SchildPfadAussen(ctx);
ctx.fillStyle = '#ffffff'; 
ctx.fill(); 

ctx.save(); 
SchildPfadInnen(ctx); 
ctx.clip();

const anzahlStreifen = 6; 
const StreifenBreite = 240 / anzahlStreifen; 

for (let i = 0; i < anzahlStreifen; i++){
    ctx.fillStyle = i % 2 === 0? '#EE2E24' :'#ffffff'; 
    ctx.fillRect(40 + i * StreifenBreite, 55, StreifenBreite, 305);
}
ctx.restore(); 

SchildPfadAussen(ctx); 
ctx.lineWidth = 4;
ctx.strokeStyle = '#000000'; 
ctx.stroke(); 

SchildPfadInnen(ctx); 
ctx.lineWidth = 2; 
ctx.strokeStyle = '#000000';
ctx.stroke(); 

ctx.fillStyle = '#000000'; 
ctx.font = 'bold 22px serif'; 
ctx.textAlign = 'center'; 
ctx.fillText('ATLETICO', 160, 45); 
ctx.fillText('BILBAO', 160, 385);

function weiter(){
    document.getElementById('fenster').scrollLeft += 320;
}

function zurueck(){
    document.getElementById('fenster').scrollLeft -= 320;
}
