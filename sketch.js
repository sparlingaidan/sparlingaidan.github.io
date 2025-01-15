const imgWidth = 3280;
const imgHeight = 2464;
let len;
let imgs = [];
let currentImg = 0;
let pHs = [];
let canopyTemps = [];
let waterTemps = [];

function preload(){
  len = loadStrings('/len.txt');
}

function setup() {
  createCanvas(imgWidth, imgHeight);
  let fileName = ''
  for(i = 0; i < len[0].length; i ++){
    fileName = 'pic/' + str(i) + '.jpg';
    temp = loadImage(fileName);
    imgs.push(temp);
  }
  currentImg = len[0].length -1;
  console.log(fileName);
}


function drawPlay(){
  fill('pink');
  rect(imgWidth - 60, 10, 50, 27);
  stroke('black');
  textSize(21);
  text("Play", imgWidth - 57, 29);
  textSize(10);
}

function draw() {
  background('pink');
  image(imgs[currentImg], 0, 0);
  drawPlay();
  updateAll();
}

function touchEnded() {
  if((mouseX > 570) & (mouseY < 50)){
    currentImg = 0;
  }
}

function mouseClicked() {
  if((mouseX > 570) & (mouseY < 50)){
    currentImg = 0;
  }
}

function updateAll(){
  if (frameCount % 25 == 0){
    currentImg ++;
  }
  if (currentImg >= len[0].length ){
    currentImg = len[0].length -1;
  }
}