class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h3");
        this.reset=createButton("Reset");
        this.title=createElement("h2");
    }

    display(){
       
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-40,50);
        this.input.position(displayWidth/2-50,displayHeight/2-200);
        this.button.position(displayWidth/2+10,displayHeight/2-150);
        this.reset.position(displayWidth-100,50);
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

           player.name=this.input.value();
           playerCount=playerCount+1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);

           this.greeting.html("Hello "+ player.name);
          this.greeting.position(displayWidth/2-50,displayHeight/2-200);
       })
       
       this.reset.mousePressed(()=>{
           player.updateCount(0);
           game.update(0);
           Player.updatecarsAtEnd(0);
       })
        
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}