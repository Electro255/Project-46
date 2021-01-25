class Form{
    constructor(){
        this.message = createElement("h3"); 
        this.input = createInput("Name");
        this.title = createElement("h1");
    }

    display(){
        this.title.html("");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        
       var name = this.input.value();

        if(name.length > 0){
            this.input.height();
          this.message.html("Please choose any of these players ");
          this.message.position(displayWidth/2 - 70, displayHeight/4);
 }

        p1 = createSprite(displayWidth/2, 500);
        p1.addImage(p1Img);
        p1.scale = 0.25;

        p2 = createSprite(displayWidth/2 - 200, 500);
        p2.addImage(p2Img);
        p2.scale = 0.3;

        p3 = createSprite(displayWidth/2 + 200, 500);
        p3.addImage(p3Img);
        p3.scale = 0.25;

        p4 = createSprite(displayWidth/2 - 100, 350);
        p4.addImage(p4Img);
        p4.scale = 0.25;

        p5 = createSprite(displayWidth/2 + 100, 350);
        p5.addImage(p5Img);
        p5.scale = 0.25;

        if(point.isTouching(p1)){
             boy = p1
        } else if(point.isTouching(p2)){
             boy = p2
        } else if(point.isTouching(p3)){
            boy = p3
        } else if(point.isTouching(p4)){
            boy = p4
        } else if(point.isTouching(p5)){
            boy = p5
        }
        }

    hide(){
        this.input.hide();
        this.message.hide();
        this.title.hide();

        if(boy !== p1){
            p1.visible = false;
        } 

        if(boy !== p2){
            p2.visible = false;
        } 

        if(boy !== p3){
            p3.visible = false;
        } 

        if(boy !== p4){
            p4.visible = false;
        } 

        if(boy !== p5){
            p5.visible = false;
        } 
    }
}