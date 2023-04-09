song1="";
song2="";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightwristY = 0;
function preload()
 {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setUp(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialliazed');
}
function draw() {
    image(video,0 ,0 ,600, 500);

    fill("FF0000");
    stroke("FF0000"); 

    if(scoreLeftWrist >0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    song2.stop()

if(song1 = False)
{
    song1.play();
    song1.setVolume(1);
    son1.rate(1);
}
}
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);
leftWristX = results[0].pose.leftWristX;
leftWristY = results[0].pose.leftWristY;
console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

rightWristX = results[0].pose.rightWristX;
rightWristY = results[0].pose.rightWristY;
console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
}
}

function play()
{
    song1.play()
}