
let rSlider, gSlider, bSlider;
let button;
let strokeShape;

function setup() {
    createCanvas(500, 500);
    textSize(15);
    noStroke();
    button = createButton('Circle');
    button.position(56.5, 215);
    button.mousePressed(circleButton);
    button = createButton('Square');
    button.position(52, 245);
    button.mousePressed(squareButton);
    button = createButton('Triangle');
    button.position(50.5, 275);
    button.mousePressed(triangleButton);
    button = createButton('Clear');
    button.position(58, 375);
    button.mousePressed(clearButton);
    button = createButton('Eraser');
    button.position(54, 345);
    button.mousePressed(eraseButton);
    button = createButton('Clear');
    button.position(58, 375);
    button.mousePressed(clearButton);
    rSlider = createSlider(0, 255, 100);
    rSlider.position(20, 20);
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, 50);
    bSlider = createSlider(0, 255, 255);
    bSlider.position(20, 80);
    strokeSlider = createSlider(0, 100, 0);
    strokeSlider.position(20, 325);
    fill(25,25,25);
    rect(0, 0, 225, 415);
  }

function circleButton() {
    circle(mouseX, mouseY, strokeSlider.value());
    strokeShape = 1;
}
function squareButton(){
    square(mouseX -= 12.5, mouseY -= 12.5, strokeSlider.value());
    strokeShape = 2;
}
function triangleButton(){
    triangle(mouseX += strokeSlider.value(), mouseY += strokeSlider.value(), mouseX -= strokeSlider.value(), mouseY -= (strokeSlider.value() * 2), mouseX -= strokeSlider.value(), mouseY += (strokeSlider.value() * 2), (strokeSlider.value() * 4));
    strokeShape = 3;
}
function eraseButton(){
    r = 255;
    g = 255;
    b = 255;
}
function clearButton(){
    clear();
}

function mouseDragged(){
    if (strokeShape == 1){
        circle(mouseX, mouseY, strokeSlider.value());
    } else if (strokeShape == 2){
        square(mouseX -= 12.5, mouseY -= 12.5, strokeSlider.value());
    } else if (strokeShape == 3){
        triangle(mouseX += strokeSlider.value(), mouseY += strokeSlider.value(), mouseX -= strokeSlider.value(), mouseY -= (strokeSlider.value() * 2), mouseX -= strokeSlider.value(), mouseY += (strokeSlider.value() * 2), (strokeSlider.value() * 4));
    } else {
        noFill();
        noStroke();
    }
    
}


function draw() {
    const r = rSlider.value();
    const g = gSlider.value();
    const b = bSlider.value();
    text('Red', rSlider.x * 2 + rSlider.width, 35);
    text('Green', gSlider.x * 2 + gSlider.width, 65);
    text('Blue', bSlider.x * 2 + bSlider.width, 95);
    text('Stroke Size', strokeSlider.x / 2 + 28, 315);
    fill(r, g, b);
    rect(38, 110, 75, 75);
  }

 


