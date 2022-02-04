var player1,enemy1,enemy1_2,enemy2,enemy2_2,enemy2_3,enemy2_4,enemy3,enemy3_2,enemy3_3,enemy3_4,enemy3_5,upgrade,bullets,enemybullet1,enemybullet2,enemybullet3,bossbullet
var player1img,player2img,player3img,enemy1img,enemy2img,enemy3img
function preload() {
    player1img=loadImage("playership1.jpg")  
    player2img=loadImage("playership2.jpg")  
    player3img=loadImage("playership3.png") 
    enemy1img=loadImage("enemyship.jpg")   
    enemy2img=loadImage("enemy2.jpg")   
    enemy3img=loadImage("boss.jpg")   
    upgradeimg=loadImage("upgrade.png")
}
function setup(){
    createCanvas(600,300)
    player1=createSprite(30,50,20,20)
    
    player1.addImage(player2img)
    player1.scale=0.4
    /*player2=createSprite(30,150,20,20)
    player3=createSprite(30,150,20,20)*/
    upgrade=createSprite(Math.round(random(100,500)),Math.round(random(0,200)))
    upgrade.velocityX=-2
upgrade.velocityY=-2
upgrade.scale=0.2
upgrade.addImage(upgradeimg)

edges=createEdgeSprites()
    
}
function draw(){
    background("white")
    drawSprites()
/*player1.depth=upgrade.depth
upgrade.depth=upgrade2.depth
*/
    if(upgrade.collide(player1)){
    player1.changeImage(player2img)
}

upgrade.bounceOff(edges)
spawnbullet()
spawnenemy()
}
function spawnenemy(){
    if(frameCount%80===0){


enemy1=createSprite(450,150,20,20)

enemy1.addImage(enemy1img)
enemy1.scale=0.2

enemy1_2=createSprite(450,150,20,20)

enemy1_2.addImage(enemy1img)
enemy1_2.scale=0.2

enemy1_2=createSprite(450,210,20,20)

enemy1_2.addImage(enemy1img)
enemy1_2.scale=0.2

enemy2=createSprite(505,150,20,20)
enemy2.addImage(enemy2img)
enemy2.scale=0.2

enemy2_2=createSprite(505,260,20,20)
enemy2_2.addImage(enemy2img)
enemy2_2.scale=0.2

enemy2_3=createSprite(505,210,20,20)
enemy2_3.addImage(enemy2img)
enemy2_3.scale=0.2

enemy2_4=createSprite(505,100,20,20)
enemy2_4.addImage(enemy2img)
enemy2_4.scale=0.2




enemy3=createSprite(555,150,20,20)
enemy3.addImage(enemy3img)
enemy3.scale=0.2

enemy3_2=createSprite(555,260,20,20)
enemy3_2.addImage(enemy3img)
enemy3_2.scale=0.2

enemy3_3=createSprite(555,210,20,20)
enemy3_3.addImage(enemy3img)
enemy3_3.scale=0.2

enemy3_4=createSprite(555,100,20,20)
enemy3_4.addImage(enemy3img)
enemy3_4.scale=0.2

enemy3_5=createSprite(555,90,20,20)
enemy3_5.addImage(enemy3img)
enemy3_5.scale=0.2



}}
function handlebulletcollision(){

}
function upgradeplayer(){

}
function spawnbullet(){
    for(var i=0;i<20;i++){
       bullets=createSprite(i,20,10,10)
 
   
    if(mousePressedOver(player1)){
        bullets.velocityX=2
    }
   
    player1.y=World.mouseY
    player1.y=bullets.y
}
}
