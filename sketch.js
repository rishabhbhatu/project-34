//Create variables here
var dog,happydog;
var database;
var  foodS,foodStock;

function preload()
{
  //load images here
  dog=loadImage("doglmg.png");
  happydog=loadImage("doglmg1.png");

}

function setup() {
	createCanvas(500,500);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);



}


function draw() {  
backGround(46,139,87);

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogHappy);

  }
}