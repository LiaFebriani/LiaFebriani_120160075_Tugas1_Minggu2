let x=270;
let y=25;
let goLeft=false;
function setup() {
  // put setup code here
  createCanvas(400,200);
  
}

function draw() {
  // put drawing code here
  background(43,191,254);

stroke(252,165,3);
fill(255,255,0);
ellipse(20,25,33,33);
stroke(255,255,255);
fill(255,255,255);
ellipse(70,25,35,15);
ellipse(75,35,20,15);
ellipse(90,20,20,15);
ellipse(95,35,20,15);
ellipse(110,25,30,15);
ellipse(143,43,30,20);
ellipse(168,48,30,20);
ellipse(153,58,40,20);
stroke(252,165,3);
fill(139,5,0);
fill(0,255,0);
strokeWeight(3);
rect(30,110,130,80);
fill(139,5,0);
rect(120,140,30,50);
fill(255,255,255);
rect(52,140,50,25);
line(52,152,102,152);
line(67,140,67,165);
line(85,140,85,165);
ellipse(127,165,6,6);
fill(251,140,1);
strokeWeight(3);
triangle(95,55,10,110,180,110);
line(73,70,118,70);
line(40,90,150,90);

stroke(252,165,3);
fill(255,255,0);
ellipse(x-50,y,33,33);
stroke(255,255,255);
fill(255,255,255);
ellipse(x,y,35,15);
ellipse(x+5,y+10,20,15);
ellipse(x+20,y-5,20,15);
ellipse(x+25,y+10,20,15);
ellipse(x+40,y,30,15);
ellipse(x+73,y+18,30,20);
ellipse(x+98,y+23,30,20);
ellipse(x+83,y+33,40,20);
line(200,0,200,200);
line(253,263,300,263);
fill(139,5,0);
fill(0,255,0);
stroke(252,165,3);
fill(139,5,0);
fill(0,255,0);
strokeWeight(3);
rect(230,110,130,80);
fill(139,5,0);
rect(320,140,30,50);
fill(255,255,255);
rect(252,140,50,25);
line(252,152,302,152);
line(267,140,267,165);
line(285,140,285,165);

ellipse(327,165,6,6);
fill(251,140,1);
strokeWeight(3);
triangle(295,55,210,110,380,110);
line(273,70,318,70);
line(240,90,350,90);

x=x+2;
if(x>400+100) x=260;
}