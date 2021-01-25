class Game{
    constructor(){

    }

    start(){
        form = new Form();
        form.display();

        console.log(boy);

        if(boy != undefined){
            gameState = 1;
        }

        console.log("Start" + gameState);
    }

    play(){
        form.hide();
    }
}