var knife,knifeImg;
var fruit,fruitImg,fruitImg2,fruitImg3,fruitImg4,fruitImg5,fruitImg6,fruitImg7
var ground,groundImg;
var score=0

function preload(){
fruitImg = loadImage("images/apple.png")
fruitImg2 = loadImage("images/banana.png")
fruitImg3 = loadImage("images/mango.png")
fruitImg4 = loadImage("images/orange.png")
fruitImg5 = loadImage("images/papaya.png")
fruitImg6 = loadImage("images/pineaple.png")
fruitImg7 = loadImage("images/watermelon.png")
groundImg= loadImage("images/road.png")
knifeImg = loadImage("images/knife.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
knife = createSprite(width/2,height/2)
knife.addImage("knife",knifeImg)
knife.scale=0.2
ground = createSprite(width/2,height/2)



}
function draw(){
    background("#FFBFEF")



    drawSprites();
}
