function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw() {
    image(video, 100, 10, 150, 120);
    tint(tint_color)
}

function take_snapshot() {
    save('my_filtered_image.png');
}

function filter_tint() {
    tint_color = document.getElementById("colour_input").value
}