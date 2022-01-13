var starImg,bgImg;
var star, starBody; 
var Fada, fadaImg;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg  = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png")
    vozfada = loadSound("sound/JoyMusic.mp3")
    //carregar animação de fada 
}

function keyPressed (){
if (keyCode === LEFT_ARROW){
fada.x-=7;
};
if (keyCode === RIGHT_ARROW){
fada.x+=7;
};
if (keyCode === 32){
Body.setStatic(starBody, false);
};
}



function setup() {
    createCanvas(800, 500);
 
    //escrever código para tocar o som vozFada
    fada = createSprite(400, 100);
    fada.addAnimation("fadaImg",fadaImg);
    vozfada.play;
    fada.scale = 0.2;
    
    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background("black");
    drawSprites();
    star.y=starBody.position.y
if(star.y > 470 && starBody.position.y > 470){ 
          Matter.Body.setStatic(starBody,true);      
}
}

