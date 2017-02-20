function setup() {
  createCanvas(720,500)
  strokeWeight(2)
}

function draw() {
  //head
  fill(0,0,0)
  ellipse(width/2,200,100,100)
  
  fill(255,255,255)
  ellipse(372,195,31,31)
  
  fill(0,0,0)
  ellipse(372,195,8,8)
  
  
  fill(150,150,150)
  ellipse(343,195,12,12)
  ellipse(378,173,10,10)
  ellipse(392,200,8,8)
  
  //neck
  line(360,250,360,320)
  line(347,230,347,320)
  line(373,230,373,320)
  
  //antennas
  line(365,150,385,70)
  line(410,200,440,205)
  line(320,170,310,165)
  
  //body
  noStroke()
  fill(150,150,150)
  ellipse(340,445,80,80)
  fill(0,0,0)
  rect(290,315,100,130)
  fill(150,150,150)
  rect(290,330,100,5)
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}