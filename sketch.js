const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var en, wo
function preload(){
    
}

function setup(){
   createCanvas(800,650)

   en=Engine.create()
   wo=en.world

    
}

function draw(){
   background(0)
   Engine.update(en) 
}   

