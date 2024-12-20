function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#023056');
  stroke('yellow');
  strokeWeight(8);
  noFill();
  
  // face and nose
  ellipse(200,200,240,180);
  fill('yellow');
  ellipse(200,220,10,10);
  
  // feather 
  strokeWeight(1);
  line(260,220,380,200);
  line(270,230,380,240);
  line(260,240,380,280);
  line(140,220,20,200);
  line(130,230,20,240);
  line(140,240,20,280);
  
  // eye
  strokeWeight(2);
  noFill();
  ellipse(230,180,30,50);
  ellipse(170,180,30,50);
  line(155,180,185,180);
  line(215,180,245,180);
  
  // ear 
  triangle(265,120,255,88,230,110);
  triangle(135,120,145,88,170,110);
  
}