var mouseEvent = "empty";
var lastposX, lastposY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
widthline= 10;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {

    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    current_pos_of_mouse_x = e.clientX = canvas.offsetLeft
    current_pos_of_mouse_y = e.clientY = canvas.offsetTop

    if (mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthline;

        
        ctx.moveTo(lastposX, lastposY);
        ctx.lineTo(current_pos_of_mouse_x, current_pos_of_mouse_y);
        ctx.stroke();
    }

    lastposX = current_pos_of_mouse_x;
    lastposY = current_pos_of_mouse_y;
}


