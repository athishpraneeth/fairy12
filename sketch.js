var starImg,bgImg;
var star, starBody;
var fairy;
var fairyIMG;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	
	//load animation for fairy here
fairyIMG = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
sound = loadSound("sound/joyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
sound.play();

	//create fairy sprite and add animation for fairy

	fairy = createSprite(100,600);
	fairy.addAnimation("fairyIMG",fairyIMG);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine); 

	fairy.debug = true;
	fairy.setCollider ("rectangle",0,0,10,10)

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){

Matter.Body.setStatic(starBody,true);

  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
	}

	if ( keyCode === RIGHT_ARROW){

  fairy.x = fairy.x + 20

	}
	

	if ( keyCode === LEFT_ARROW){

		fairy.x = fairy.x  -20
	
	}


}