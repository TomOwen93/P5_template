let Coolers;
let mappedCoolers;
let slider;

function setup() {
  createCanvas(1000, 1000);
  background(100);
  coolers = [
    "eac435",
    "345995",
    "03cea4",
    "fb4d3d",
    "ca1551",
    "023c40",
    "c3979f",
    "0ad3ff",
    "78ffd6",
    "e1faf9",
  ];
  mappedCoolers = coolers.map((el) => "#" + el);
  slider1 = createSlider(0, 1000, 100, 1);
  slider1.position(10, 10);
  slider1.style("width", "100px");

  slider2 = createSlider(0, 1000, 0, 50);
  slider2.position(10, 40);
  slider2.style("width", "100px");
  frameRate(20);
}

function draw() {
  colorMode(HSB);
  let val = slider1.value();
  let val2 = slider2.value();
  drawCircles(val, val2);
}

function drawCircles(val, val2) {
  for (i = -50; i < 1000; i += 50) {
    let colours = lerpColor(color("red"), color("magenta"), val / 1000);
    fill(colours);
    circle(i, val2, random(5, 40));
  }
}
