function setup() {
    let canvas = createCanvas(1550, 400);

    background(220, 3, 200);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 20, 20);
    } else {
        fill(255, 200, 0);
        ellipse(mouseX, mouseY, 20, 20);
    }
}
