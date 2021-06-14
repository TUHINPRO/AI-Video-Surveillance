video="";
status="";
function preload() {
    video=createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

}

function draw() {
    image(video,0,0,600,400);


}

function ModelLoaded() {
video.loop();
console.log("Model is Loaded");
status="true";
video.volume(0.5);
video.speed(1);

}
function Start() {
anything=ml5.objectDetector('cocossd',ModelLoaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";

}