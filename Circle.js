class Circle {
    constructor(posX, posY, tam) {
        this.posX = posX;
        this.posY = posY;
        this.tam = tam;
        this.opacidad = 0;
        this.sePinto = false;
        this.contador = 0;
        this.pintando = false;
    }

    dibujar() {
        stroke(50);
        fill(0, 0, 0, this.opacidad);
        ellipse(this.posX, this.posY, this.tam);
    }

    pintar() {
        if (this.sePinto) {
            this.contador++;
            if (this.contador <= 100) {
                this.opacidad = 255;
            } else {
                this.opacidad = 0;
                this.sePinto = false;
                this.contador = 0;
                this.pintando = false;
            }
        }
    }

    dentro(x, y) {
        let d = dist(x, y, this.posX, this.posY);
        return d < this.tam / 2;
    }
}