function orbit(x,y){
    this.x;
    this.y;
    this.radius;
    this.angle;
    this.bubblesList = [];

    this.display = function(){
        orbitLoop:
        for (let i = 1; i < 1000; i++) {
            circlesArray[i].move();
            circlesArray[i].display(circlesArray[i].x, circlesArray[i].y);
            let bubblesCount = circlesArray.length;
            for (let j = 0; j < int((i*10*PI)/15); j++) {
                rotate(this.angle);
                ellipse(i*10, 0, 10,10)
                bubblesCount--
                if (bubblesCount=0){
                    break orbitLoop;
                }
                this.angle += (i*10*PI)/15;
            }
        }
    }

    this.clicked = function(){
        if (dist(mouseX, mouseY, this.x, this.y) < 30) {
            alert('clicked');
        }
    }

    this.move = function(){
        rotate(this.angle);
    }
        
}
