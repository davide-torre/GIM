
let posizioneX 
let posizioneY 
let velX 
let velY 


function setup(){
	createCanvas(windowWidth, windowHeight)
	posizioneX = width/2
	posizioneY = height/2
	velX = random (-6, 6)
	velY = random (-6, 6)

	background(0, 0, 0)
}

function draw(){

const r = (sin(frameCount * 0.031) + 1) * 127.5
	const g = (sin(frameCount * 0.032) + 1) * 127.5
	const b = (sin(frameCount * 0.033) + 1) * 127.5
	fill(r, g, b) 
// fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)
noStroke ()
ellipse(posizioneX, posizioneY, 500, 500)

posizioneX = posizioneX + velX
posizioneY = posizioneY + velY



if (posizioneX >= width || posizioneX <= 0) velX = -velX      //w... prende il numero nel canvas (x)
if (posizioneY >= height || posizioneY <= 0) velY = -velY    //h... prende il numero nel canvaas (y)

// esteso if (posizioneX >= 400) velX = -velX
// steso if (posizioneX <= 0) velX = -velX



//// function keyPressedd () {}     per salvare i png // premendo k posso fare il dowlad
//// save ("pong.png")


}


// option shift freccia in basso: dupilico la riga 
// cmd d, prendo più punti sil cursore
//cinematica -> descrivere il movimento 