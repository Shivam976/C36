class Game{

    constructor(){

    }

    //reading the value of gameState from the db
    getState(){
        var gameStateRef=db.ref("gameState");
        gameStateRef.on("value", function(data){
                gameState=data.val();
        } )
    }

    //update in the db the value of gameState
    update(state){
    db.ref('/').update({
        gameState:state
    })
    }

    //to start the game 
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }

}