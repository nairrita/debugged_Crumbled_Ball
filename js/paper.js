class Paper{
    constructor(x,y,width,height){
        var options = {
            //'frictionAir':0,
            friction :0.5,
           // 'frictionStatic':1,
           // 'inertia': Infinity,
           isStatic :false,
            restitution:0.8,
            density :1.2
        }
        //you declared this.paper here and when you were calling in the Apply force you were calling as trash.body that was the main error!!
        this.paper = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        this.image = loadImage("assets/paper.png");
        World.add(world,this.paper);
        
        
    }
    display(){

      imageMode(CENTER)
      image(this.image,this.paper.position.x, this.paper.position.y,this.width, this.height);
    }
}