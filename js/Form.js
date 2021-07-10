class Form {
  constructor() {
    
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide()
  {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();

  }

  display(){
 
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50, 0);
    
    this.input.position(displayWidth/2-100, displayHeight/3);
    this.button.position(displayWidth/2+70, displayHeight/2);

    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index=playerCount;
      player.updateplayer(playerCount)
      player.update()
      
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-100, displayHeight/2)
    });

  }
}
