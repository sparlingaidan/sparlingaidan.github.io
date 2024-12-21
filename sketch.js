function setup() {
  createCanvas(640, 580);
  imgs = loadImage('pic/test.jpg');
}

function draw() {
  background('#033000');
  image(imgs, 0, 0); 
}