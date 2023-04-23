
function preload(){


}

function setup(){
video = createCapture(VIDEO);
video.size(550, 400);

canvas = createCanvas(550, 550 );
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}
 
function draw(){
 background("#ffa3ac");
}

function modelloaded(){
    console.log("model is loaded");
    
}
   
function gotPoses(results){
    if(results.length > 0){
        console.log(results[0])
    }
}