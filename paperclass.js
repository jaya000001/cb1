/*class Paper{
    constructor(x,y,r){
        this.body=Bodies.circle(this.x,this.y,this.r/2,{isStatic:true});
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        fill("yellow");
        //ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        ellipse(50,50,10,10);
    }
};*/


class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("yellow")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}