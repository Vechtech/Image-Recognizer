Webcam.set({
width: 350, 
height: 300,
image_format: "png",
png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= "<img id='object' src='" + data_uri + "'>";
});
}

console.log("ml5 version", ml5.version);

// Next step is to load the teachable machines model

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4gZ5AJafE/model.json",modelLoaded);

function modelLoaded(){

console.log("model has been loaded successfully");

}

function check(){

img=document.getElementById("object");
classifier.classify(img, gotResult);

}

function gotResult(error,Results){

if(error){

console.error(error);

}
else{

console.log(Results);
document.getElementById("object_name").innerHTML = Results[0].label;
document.getElementById("accuracy").innerHTML = Results[0].confidence.toFixed(3);

}

}