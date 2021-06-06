function bubble(x,y,col){
    this.xOrigin = x,
    this.yOrigin = y,
    this.x = x,
    this.y = y,
    this.xGo = x,
    this.yGo = y,
    this.radius = 10;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.col = col;

    this.display = function(x,y){
        fill(col);
        if (dist(mouseX - int(width/2 - (15*img.width/2)), mouseY - int(height/2  - (15*img.height/2)), this.x, this.y) < this.radius*2){
            ellipse(x + random(-3,3), y + random(-3,3), this.radius, this.radius);
        }else{
            ellipse(x, y, this.radius, this.radius);
        }
    }

    this.clicked = function(){
        
           
        if (dist(mouseX - int(width/2 - (15*img.width/2)), mouseY - int(height/2  - (15*img.height/2)), this.x, this.y) < this.radius*2) {
            if (mouseButton === LEFT){
                if (this.yGo == this.yOrigin){
                    fallingArray[this.x/15] += 1;
                    this.yGo = height - ((fallingArray[this.x/15]+7) * 15);
                    this.col[3] = 127;
                }
            }else if (mouseButton === RIGHT){
                if (this.yGo != this.yOrigin){
                    this.col[3] = 255;
                    this.xGo = this.xOrigin;
                    this.yGo = this.yOrigin;
                    fallingArray[this.x/15] -= 1;
                }
            }
            
        }
        
    }

    this.move = function(){
        if (this.x == this.xGo){
            this.xSpeed = 0;
        }else{
            if (this.x < this.xGo){
                this.xSpeed = 3;
            }else if (this.x > this.xGo){
                this.xSpeed = -1;
            }
        }

        if (this.y == this.yGo){
            this.ySpeed = 0;
        }else{
            if (this.y < this.yGo){
                this.ySpeed = 3;
            }else if (this.y > this.yGo){
                this.ySpeed = -1;
            }
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
        
}
