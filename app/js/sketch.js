var x = 0;
var y = 0;

function setup() {
  createCanvas(1000, 600);
  background(000);
}

function draw() {
  img = createImage(66, 66);
img.loadPixels();
for (i = 0; i < img.width; i++) {
  for (j = 0; j < img.height; j++) {
    img.set(i, j, color(60, 179, 113, i % img.width * 2));
  }
}
img.updatePixels();
image(img, 170, 17);
image(img, 380, 280);
image(img, 700, 17);
  
ellipse(x, height/4, 120, 120);
x = x + .5;

ellipse(x, height/4, 80, 80);
x = x + .5;

ellipse(x, height/4, 60, 60);
x = x + .5;

ellipse(x, height/100, 120, 120);
x = x + .5;

ellipse(x, height/100, 80, 80);
x = x + .5;

ellipse(x, height/100, 60, 60);
x = x + .5;

ellipse(x, height/2, 120, 120);
x = x + .5;

ellipse(x, height/2, 80, 80);
x = x + .5;

ellipse(x, height/2, 60, 60);
x = x + .5;


push();
  translate(width*0.2, height*0.3);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3); 
  pop();
  
push();
translate(width*0.5, height*0.3);
rotate(frameCount / 50.0);
polygon(0, 0, 60, 20); 
pop();

push();
translate(width*0.8, height*0.3);
rotate(frameCount / -100.0);
polygon(0, 0, 70, 7); 
pop();

}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0.45; a < TWO_PI; a += angle) {
    var sx = x + cos(a^2) * radius;
    var sy = y + sin(a^4) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}