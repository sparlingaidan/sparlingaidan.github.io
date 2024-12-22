const imgWidth = 640;
const imgHeight = 480;

function setup() {
  createCanvas(imgWidth, 940);
  imgs = loadImage('pic/test.jpg');
}

function drawpH(){
  strokeWeight(2);
  stroke('black');
  line(0, imgHeight, imgWidth, imgHeight);
  fill('white');
  stroke('blue');
  strokeWeight(2);
  text("6.2", 0, imgHeight + 25);
  text("5.8", 0, imgHeight + 65);
  text("5.3", 0, imgHeight + 115);
  text("pH", (imgWidth/2) - 10, imgHeight + 15);
  for (i = imgHeight + 20; i < imgHeight + 120; i = i + 10){
    line(20, i, imgWidth -20, i);
  }
  for ( i = 20; i < imgWidth; i = i + 40){
    line(i, imgHeight + 20, i, imgHeight + 110);
  }
}

function drawCanopy(){
  text("Canopy Temp", (imgWidth/2) - 38, imgHeight + 125);
  text("95", 0, imgHeight + 135);
  text("75", 0, imgHeight + 175);
  text("50", 0, imgHeight + 225);
  for (i = imgHeight + 130; i < imgHeight + 230; i = i + 10){
    line(20, i, imgWidth -20, i);
  }
  for ( i = 20; i < imgWidth; i = i + 40){
    line(i, imgHeight + 130, i, imgHeight + 220);
  }
}

function drawWater(){
  text("Water Temp", (imgWidth/2) - 32, imgHeight + 235);
  text("73", 0, imgHeight + 245);
  text("69", 0, imgHeight + 285);
  text("63", 0, imgHeight + 335);
  for (i = imgHeight + 240; i < imgHeight + 340; i = i + 10){
    line(20, i, imgWidth -20, i);
  }
  for ( i = 20; i < imgWidth; i = i + 40){
    line(i, imgHeight + 240, i, imgHeight + 330);
  }
}

function draw() {
  background('pink');
  image(imgs, 0, 0);
  drawpH();
  drawCanopy();
  drawWater();
}