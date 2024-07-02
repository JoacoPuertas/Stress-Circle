
let circulos = [];

function setup() {
    createCanvas(500, 500);
    circulos.push(new Circle(width / 2, height / 2, 100));
}

function draw() {  
    background(255);
    for (let i = 0; i < circulos.length; i++) {
        circulos[i].dibujar();
        circulos[i].pintar();
    }
}

function mousePressed() {
    for (let i = 0; i < circulos.length; i++) {
        if (circulos[i].dentro(mouseX, mouseY)) {
            circulos[i].sePinto = true;
            circulos[i].pintando = true;
            let nuevo1 = new Circle(random(width), random(height), 100);
            let nuevo2 = new Circle(random(width), random(height), 100);
            circulos.push(nuevo1, nuevo2);
        }
    }
}