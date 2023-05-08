function setup(){
	createCanvas(400, 400)
}

function draw(){ //viene ripetuta 60 volte al secondo quindi sono neri solo per un frame
	
	
	background(220,220,220) //RGB: rosso verde blu 

	stroke (0)
	strokeWeight (3)

	point(30,50)
	point(31,50)
	point(32,50)

	
line(50, 60, 200, 280) //funzione che disegna un segmento (x,y, x,y)

stroke(0,200,0)

fill (255, 0, 0)
rect(150,150, 120, 90)

fill (255, 255, 0)
rect(120,120, 120, 90)


//rect(120,120, 90, 90) per fare un quadrato


fill (0, 180, 240,   128) //TRASPARENZA
ellipse (230, 270, 80, 80) //punto centrale e diametro

noFill()
triangle (310, 90,390,160,260,180)






}






//Mettere back slash senza togliere dal codice 

//option freccia in giù sposto l'ordine