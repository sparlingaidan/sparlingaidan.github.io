const imgWidth = 640;
const imgHeight = 480;

function setup() {
  createCanvas(imgWidth, 940);
  imgs = loadImage('pic/test.jpg');
}

function drawpH(){
  fill('white');
  stroke('blue');
  strokeWeight(2);
  text("6.2", 0, imgHeight + 15);
  text("5.8", 0, imgHeight + 55);
  text("5.3", 0, imgHeight + 105);
  for (i = imgHeight + 10; i < imgHeight + 110; i = i + 10){
    line(20, i, imgWidth, i);
  }
  for ( i = 20; i < imgWidth; i = i + 40){
    line(i, imgHeight +10, i, imgHeight + 100);
  }
  strokeWeight(2);
  stroke('black');
  line(0, imgHeight, imgWidth, imgHeight);
}

function draw() {
  background('pink');
  image(imgs, 0, 0);
  drawpH(); 
}