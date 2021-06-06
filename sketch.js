let circlesArray = [];
let fallingArray = [];
let img;
let spinnig = true;
let theta = 0;

function preload(){
  img = loadImage('assets/instagram.jpg');
  ost = loadSound('assets/music.mp3');
}

function setup() {
  createCanvas(600, 600);
  noFill();
  noStroke();
  img.loadPixels();
  getArray();
}

function draw() {
  background(0);
  if (spinnig){
    translate(width/2, height/2);
    ellipse(0,0,70,70);
    fill(0);
    textAlign(CENTER,CENTER);
    textStyle(BOLD);
    textSize(20);
    text("Hold", 0, 0);
    rotate(theta);
    for (let i = 0; i < circlesArray.length; i++) {
      rotate(100)
      circlesArray[i].display((i*2)+50, 0);
      theta += 0.00001;
    }
    if (mouseIsPressed & dist(mouseX, mouseY, width/2, height/2) < 70) {
      theta *= 1.01;
      if (theta > 50){
        spinnig = !spinnig
        ost.play();
        createInputs();
      }
    }
  }else{
    translate(int(width/2 - (15*img.width/2)), int(height/2  - (15*img.height/2)));
    for (let i = 0; i < circlesArray.length; i++) {
      circlesArray[i].move();
      circlesArray[i].display(circlesArray[i].x, circlesArray[i].y);
      if (mouseIsPressed) {
        circlesArray[i].clicked();
      }
    }
  }

}


function createInputs(){
  input = createInput("assets/instagram.jpg");
  input.position(10, 10);
  fetchButton = createButton("Fetch Image");
  fetchButton.position(input.x + input.width + 10, 10);
  fetchButton.mousePressed(fetchImage);

  resetButton = createButton("Reset");
  resetButton.position(fetchButton.x + fetchButton.width + 10, 10);
  resetButton.mousePressed(resetImage);
  
  lClickP = createP("Hold L Clcik = Hit down bubbles");
  lClickP.position(resetButton.x + resetButton.width + 10, 0);
  lClickP.style("color:#fff;");

  rClickP = createP("Hold R Clcik = Re build bubbles");
  rClickP.position(resetButton.x + resetButton.width + 10, 20);
  rClickP.style("color:#fff;");
}

function fetchImage() {
  img = loadImage(input.value(), () => {
    circlesArray = [];
    fallingArray = [];
    getArray()
  });
}

function resetImage() {
  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].col[3] = 255;
    circlesArray[i].xGo = circlesArray[i].xOrigin;
    circlesArray[i].yGo = circlesArray[i].yOrigin;
  }
  for (let j = 0; j < fallingArray.length; j++) {
    fallingArray[j] = 0;
  }
}


function getArray(){
  img.resize(25,25);
  for (let y = 0; y < img.width; y++) {
    for (let x = 0; x < img.height; x++) {
      circlesArray.push(new bubble(x*15, y*15, img.get(x,y)))
    }
    fallingArray.push(0);
  }
}



