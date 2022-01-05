Webcam.set(
    {
        width:340,height:300,
        image_format:"png",png_quality:90
    }
);
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(dataurl)
    {
        document.getElementById("result").innerHTML='<img id="captureimage"src="'+dataurl+'"/>';
    });
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("",modelloaded);

function modelloaded(){
    console.log("modelisloaded");
}

function check(){
    img=document.getElementById("captureimage");
    classifier.classify(img,getresult);
}

function getresult(error,results){
if(error)
{console.log(error);}
else{
    console.log(results);
    document.getElementById("objectname").innerHTML=results[0].label;
    document.getElementById("objectaccuracy").innerHTML=results[0].confidence.toFixed(2);
} 

}