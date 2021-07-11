const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;





var ground, miniground1, miniground2 ,polygon_img;
var box1, box2, box3, box4, box5 ,box6 ,box7 ,box8, box9, box10, box11, box12, box13 ,box14 ,box15, box16;
var box17,box18, box19 ,box20, box21 ,box22, box23, box24 ,box25;
var chance ,slingShot;
chance = 5;
function preload()
{

    polygon_img = loadImage("polygon.png");
}



function setup()
{
 canvas = createCanvas(1200,600);
    
 engine = Engine.create();
 world = engine.world;

 miniground1 = new Ground(580,500,300,10);
 miniground2 = new Ground(950,300,300,10);
 ground = new Ground(600,600,1200,20);

 //line1
 box1 = new Box(459,470,40,45 );
 box2 = new Box(500,470,40,45 );
 box3 = new Box(541,470,40,45 );
 box4 = new Box(581,470,40,45 );
 box5 = new Box(620,470,40,45 );
 box6 = new Box(660,470,40,45 );
 box7 = new Box(701,470,40,45 );

//line2

box8 = new Box(500,423,40,45);
box9 = new Box(540,423,40,45);
box10 = new Box(580,423,40,45);
box11 = new Box(620,423,40,45);
box12 = new Box(660,423,40,45);

//line 3

box13 = new Box(540,370,40,45);
box14 = new Box(580,370,40,45);
box15 = new Box(620,370,40,45);

box16 = new Box(580,325,40,45);

box17 = new Box(860,270,40,45);
box18 = new Box(900,270,40,45);
box19 = new Box(940,270,40,45);
box20 = new Box(980,270,40,45);
box21 = new Box(1020,270,40,45);

box22 = new Box(900,225,40,45);
box23 = new Box(940,225,40,45);
box24 = new Box(980,225,40,45);

box25 = new Box(940,175,40,45);



polygon = Bodies.circle(50,20,20);
World.add(world,polygon); 


slingShot = new Slingshot(polygon,{x:200,y:200});



Engine.run(engine);



}

function draw()
{
    background("lightBlue");
    Engine.update(engine);

    textSize(20);
    text(mouseX + "," + mouseY,30,50)

    miniground1.display();
    miniground2.display();

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    slingShot.display();
    

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,70,70);


    textSize(20);
    text("Chance" + "=" + chance ,20,80);

    if(chance > 0){
    textSize(20);
    text("Press 'SPACE' to get a new chance",680,20);
    }

    if(chance === 0)
    {
    textSize(100);
    text("0 chances left",250,200);
    }
    

drawSprites();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chance = chance-1;
    slingShot.fly();
}

function keyPressed()
{

if(chance > 0)
{
  if(keyCode === 32)
  {
    
      slingShot.attach(polygon);
  }
}
}
