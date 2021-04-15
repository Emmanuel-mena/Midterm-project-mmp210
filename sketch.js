let pageNum = 1; //declare a variable to hold current page number (current state)
let numPages = 6; //declare a variable to hold total number of pages (states)

function setup() {
  createCanvas(600, 500);
  console.log(pageNum); //during setup, print current page (zero)
  
}

function draw() {
   
  //display something different on the canvas depending on current page (current state)
  if (pageNum == 1){
    background(219,106,64);
    textSize(22);
    text("Aliens have developed enough intelligence to finally build a spaceship and leave mars and the little green man are ready and strapped in for lift off. ", 100,50,400,400);
    
  
   //Alien spaceship
  fill(66,219,97);
  circle(350,230,60);
  fill(128, 128, 128);
  ellipse(350,250,100,50);
  stroke(0);
  
  fill(66,219,240);
   noStroke();
  
   //spaceship lights
  circle(327,238,8);
  circle(310,250,8);
  circle(350,235,8);
  circle(350,235,8);
  circle(372,238,8);
  circle(389,250,8);
  circle(371,263,8);
  circle(348,266,8);
  circle(325,264,8);
  

  }
  else if (pageNum == 2){
    background(0);
     textSize(21);
    text("Now that they made it into space they are searching for a radio signal coming from a blue marvel. The little green man are excited to see this new place. ", 30,30,400,400);
    

    fill(219,106,64)
 circle(300,650,800);
     
  push();
  translate(mouseX-350, mouseY-250); 
   //Alien spaceship
  fill(66,219,97);
  circle(350,230,60);
  fill(128, 128, 128);
  ellipse(350,250,100,50);
  stroke(0);
  
  fill(66,219,240);
   noStroke();
  
   //spaceship lights
  circle(327,238,8);
  circle(310,250,8);
  circle(350,235,8);
  circle(350,235,8);
  circle(372,238,8);
  circle(389,250,8);
  circle(371,263,8);
  circle(348,266,8);
  circle(325,264,8);
  
  pop();
    
  }
  else if (pageNum == 3){
     
 createCanvas(600, 500);
  background(0); 
  textSize(21);
    text("The green man are amazed at how stunning this new view is. They are now on course to planet earth following the radio signal", 30,210,400,400);
    
  //MARS
 fill(219,106,64)
 circle(110,110,140);
   
  //SUN
  fill(240,236,5);
 circle(580,60,240);
  
   //PLANET EARTH
 fill(43,31,245)
 circle(450,430,90);
  
  //MOON
  fill(235)
  circle(530,400,20);
  
  push();
  translate(mouseX-350, mouseY-250); 
   //Alien spaceship
  fill(66,219,97);
  circle(350,230,60);
  fill(128, 128, 128);
  ellipse(350,250,100,50);
  stroke(0);
  
  fill(66,219,240);
   noStroke();
  
   //spaceship lights
  circle(327,238,8);
  circle(310,250,8);
  circle(350,235,8);
  circle(350,235,8);
  circle(372,238,8);
  circle(389,250,8);
  circle(371,263,8);
  circle(348,266,8);
  circle(325,264,8);
  
  pop();
  
  }
  else if (pageNum == 4){
    background(0);
    text("The aliens have decided to venture into the new planet to check out where the signal is coming from",  30,80,400,400);
    
    //PLANET EARTH
 fill(43,31,245)
 circle(430,300,280);
  
  //MOON
  fill(235)
  circle(200,200,50);
    
    
   
   //Alien spaceship
  fill(66,219,97);
  circle(350,230,60);
  fill(128, 128, 128);
  ellipse(350,250,100,50);
  stroke(0);
  
  fill(66,219,240);
   noStroke();
  
   //spaceship lights
  circle(327,238,8);
  circle(310,250,8);
  circle(350,235,8);
  circle(350,235,8);
  circle(372,238,8);
  circle(389,250,8);
  circle(371,263,8);
  circle(348,266,8);
  circle(325,264,8);
  

  }
  else if (pageNum == 5){
    background(34,139,34);
    text("The green man stares at an antenna from a distance wondering what it is. They have now made contact with a stranger in the woods. shots are heard and screams from a distance", 30,40,400);
    ellipse(465,190,130);
    rect(450,200,30,160,15,15,4,4);
 
    //
    ellipse(465,190,130);
    
  }
  else if (pageNum == 6){
    background(0);
    text("After one of the aliens was shot and killed by a hunter in the woods the little green man have decided to terminate these creatures that killed their friend and return home.", 30,40,400,400);
    
    
    //PLANET EARTH
 fill(255, 0, 0)
 circle(430,300,280);
  
  //MOON
  fill(235)
  circle(200,200,50);
    
    
   
   //Alien spaceship
  fill(66,219,97);
  circle(350,230,60);
  fill(128, 128, 128);
  ellipse(350,250,100,50);
  stroke(0);
  
  fill(66,219,240);
   noStroke();
  
   //spaceship lights
  circle(327,238,8);
  circle(310,250,8);
  circle(350,235,8);
  circle(350,235,8);
  circle(372,238,8);
  circle(389,250,8);
  circle(371,263,8);
  circle(348,266,8);
  circle(325,264,8);
  
    
    
    
    
  }
  
}

//mousePressed() function will run each time the mouse is clicked
function mousePressed(){
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages){
    pageNum++;
  }
  
  //otherwise, reset to first page
  else{
    pageNum = 1;
  }
  
  //after each click, print the current page number to the console
  console.log(pageNum);
}
