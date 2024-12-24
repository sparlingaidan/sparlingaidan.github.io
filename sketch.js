const imgWidth = 640;
const imgHeight = 480;
let len;
let imgs = [];
let currentImg = 0;
let pHs = [];
let canopyTemps = [];
let waterTemps = [];

function preload(){
  len = loadStrings('/len.txt');
  pHs = loadStrings('/pH.txt');
  canopyTemps = loadStrings('canopyTemp.txt');
  waterTemps = loadStrings('waterTemp.txt');
}

function setup() {
  createCanvas(imgWidth, 940);
  let fileName = ''
  for(i = 0; i < len[0].length; i ++){
    fileName = 'pic/' + str(i) + '.jpg';
    temp = loadImage(fileName);
    imgs.push(temp);
  }
  currentImg = len[0].length -1;
}

function drawpH(){
  strokeWeight(2);
  stroke('black');
  line(0, imgHeight, imgWidth, imgHeight);
  fill('white');
  stroke('blue');
  strokeWeight(2);
  text("6.2", 0, 505);
  text("5.8", 0, imgHeight + 65);
  text("5.3", 0, imgHeight + 115);
  text("pH", (imgWidth/2) - 10, imgHeight + 15);
  for (i = imgHeight + 20; i < imgHeight + 120; i = i + 10){
    line(20, i, imgWidth -20, i);
  }
  for ( i = 20; i < imgWidth; i = i + 40){
    line(i, imgHeight + 20, i, imgHeight + 110);
  }

  for (i = 0; i < 16; i ++){
    circle(620 + (i * -40), 500 - (6.2 - float(pHs[currentImg - i])) * -100, 10);
    if(currentImg == 0){
      continue;
    }
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

  for (i = 0; i < 16; i ++){
    circle(620 + (i * -40), 610 - (95 - float(canopyTemps[currentImg - i])) * -2, 10);
    if(currentImg == 0){
      continue;
    }
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
  for (i = 0; i < 16; i ++){
    circle(620 + (i * -40), 720 - (73 - float(waterTemps[currentImg - i])) * -9, 10);
    if(currentImg == 0){
      continue;
    }
  }
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
  drawpH();
  drawCanopy();
  drawWater();
  updateAll();
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
  if (currentImg >= (4) ){
    currentImg = len[0].length -1;
  }
}