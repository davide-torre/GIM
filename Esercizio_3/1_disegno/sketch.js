
let posizioneX 
let posizioneY 
let velX 
let velY 


function setup(){
	createCanvas(800, 400)
	posizioneX = width/2
	posizioneY = height/2
	velX = random (-4, 4)
	velY = random (-4, 4)

	background(240, 60, 0)
}

function draw(){

noStroke()
fill (random(200, 255), random(100), random(100))
// fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)

ellipse(posizioneX, posizioneY, 20, 20)

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