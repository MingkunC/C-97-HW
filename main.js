canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
array = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg"];
random_number = Math.floor(Math.random()*4);
rover_width = 100;
rover_height = 150;
background_image = "Mushroom_village.webp";
rover_image = "Finn_with_bionic_arm-0.webp";
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '87')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '83')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '65')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '68')
        {
            right();
            console.log("right");
        } 
}

function up()
{
    rover_y = rover_y - 10;
    console.log("When up arrow is pressed, x=" + rover_x + " | y = "+rover_y);
    uploadBackground();
    uploadrover();
}

function down()
{
        rover_y =rover_y+ 10;
        console.log("When down arrow is pressed, x=" + rover_x + " | y = "+rover_y);
        uploadBackground();
         uploadrover();   
}

function left()
{
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed, x=" + rover_x + " | y = "+rover_y);
        uploadBackground();
         uploadrover();
}

function right()
{
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed, x=" + rover_x + " | y = "+rover_y);
        uploadBackground();
        uploadrover();
}

