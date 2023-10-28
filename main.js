X = 0
Y = 0

input = document.getElementById("F")

fileName = ""
Delay = 0


function preload(){
Mustache = loadImage("https://i.postimg.cc/DyDWGrvJ/download-removebg-preview.png")
}

function setup(){
canvas = createCanvas(300,300)
canvas.position(620,300)
video = createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose" , gotPoses )
}

function modelLoaded(){
    console.log("Loaded")
    }

function gotPoses(results){
if(results.length > 0) {
    console.log(results)
    X = results[0].pose.nose.x - 15
    Y = results[0].pose.nose.y -5
}

}

function draw() {

image(video,0,0,300,300)
image(Mustache,X,Y,33,33)

}

function TakePhoto() {

    Delay = document.getElementById("D").value
    fileName = document.getElementById("F").value

   if( fileName ==  ""){
       window.alert("No")
   }

   else if(Delay == 0){
       window.alert("No")
   }

   else {
       setTimeout(function()
   { 
       save(fileName + ".png")
       input.value = null
       Delay.value = null
       
   }, Delay*1000   );
       

   }



}