class Box{
    constructor(x,y,width, height){
        var options={isStatic: true}
this.whites=Bodies.rectangle(x,y,width,height,options);

this.width=width;
this.height=height;
World.add(world,this.whites);
    }

    display() 
    {
      var wes = this.whites.position;
      rectMode(CENTER)
      fill("white")  
      noStroke();
      rect(wes.x,wes.y,this.width,this.height);

    }
}