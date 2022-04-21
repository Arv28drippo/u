status = "";

function setup()
{
    canvas = createCanvas(640, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(640, 530);
    video.hide();
}

function Start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detectiong Objects";
    document.getElementById("object_name_input").value;
}

function modelLoaded()
{
    console.log("The Model Is Loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 640, 530);
}