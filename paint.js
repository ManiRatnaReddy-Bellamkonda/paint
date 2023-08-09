//Author:  Mani ; ID: C0887487

let canvas = document.querySelector('#main');
let context = canvas.getContext('2d');
let radius;
let co_ord = { x: 0, y: 0 };
let color;
let paint = false;     //flag to know when user is painting


var output = document.getElementById("brushSize");
output.innerHTML = slider.value;  // to display the brush size

slider.oninput = function() {
  output.innerHTML = this.value;
}


window.addEventListener('load', () => {
    document.addEventListener('mousedown', startDrawing); //click the mouse
    document.addEventListener('mouseup', stopDrawing); // stop clicking the cursor
    document.addEventListener('mousemove', draw);// stop moving the cursor
    updateBrushSize();
});

function startDrawing(event) {
    paint = true;
    getPosition(event);
}
function stopDrawing() {
    paint = false;  //change flag when user stops painting
}

function getPosition(event) {  // fetch the position of the cursor
    co_ord.x = event.clientX - canvas.offsetLeft;
    co_ord.y = event.clientY - canvas.offsetTop;
}

function draw(event) {
    if (!paint) return;
    context.beginPath();

    context.lineWidth = radius;
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.moveTo(co_ord.x, co_ord.y);
    getPosition(event);
    context.lineTo(co_ord.x, co_ord.y);
    context.stroke();
}

function colorChange(event) {     //chage the paint brush color
    let id = event.currentTarget.id;
    if (id === 'black') {
        color = '#000000';
    }
    else if (id === 'pink') {
        color = '#f1004b'
    }
    else if (id === 'blue') {
        color = '#256eff'
    }
    else if (id === 'yellow') {
        color = '#ffcf01'
    }
    else if (id === 'erase') {
        color = '#FFFFFF'
    }
}

function clearScreen() {
    context.reset();   //reset the screen to blank
}

function updateBrush() {
    radius = document.getElementById("slider").value;  //update the paint brush size
}



