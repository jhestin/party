//The setup function only happens once
function setup() {
	createCanvas(500, 500);
	var ellipse=500 //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(55); //an RGB color for the canvas' background
  //circle
  stroke(250); // an RGB color for the circle's border
  fill(250); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/1.5,200,200);
  textSize(40);
text('party all night!', 20, 30);
fill(0, 102, 153);
}
