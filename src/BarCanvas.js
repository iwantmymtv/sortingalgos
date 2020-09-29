export default class Bar{
  constructor(canvas,barsCount){
    this.canvas = canvas;
    this.barsCount = barsCount;
    this.ctx = canvas.getContext('2d');
    this.barMargin = 2;
    this.data = [];
    this.sortedData = [];
    this.heights = [];
    this.height = 0;
    this.width = 0;
    this.speed = 80;
  }

  canWidthStyle(width = "100%"){
    this.canvas.style.width = width;  }
    
  canHeightStyle(height = "50vh"){
    this.canvas.style.height = height;
  }

  get barWidth(){
    return this.canvas.width / (this.barsCount) - this.barMargin;
  }

  get canHeight(){
    return this.canvas.height;
  }
  get canWidth(){
    return this.canvas.width;
  } 

  set setCanHeight(value){
    this.canvas.height = value;
  }
  set setCanWidth(value){
    this.canvas.width = value;
  }

  set setBarsCount(num){
    this.barsCount = num;
    this.drawBars(c.data);
  }

  set setBarMargin(num){
    this.barMargin = num;
  }

  set setSpeed(num){
    this.speed = num;
  }

  set setData(data){
    this.data = data;  
  }

  populateData(){
    this.data = []
    for (let i = 1; i <= this.barsCount; i++) {
      this.data.push(i);
    };
    this.sortedData = [...this.data];
  }

  generateHeights(){
    for (let j = 0; j < this.barsCount; j++){
      this.heights[j] = this.canHeight*((100/this.barsCount*(this.data[j]))/100)
    }
  }

  drawBars(data,j){
    this.barWidth;
    this.setData = data;
    this.generateHeights();
    
    this.ctx.clearRect(0,0,this.canWidth,this.canHeight);
    let X = this.barMargin;
    var my_gradient;
    for (let i =0; i<this.data.length; i++) {
      my_gradient = this.ctx.createLinearGradient(0, 0, 0, this.canHeight);
      if (i===j){
        this.ctx.fillStyle = "black"; 
      }else if(this.data[i] === this.sortedData[i]){
        my_gradient.addColorStop(0, "#006e02");
        my_gradient.addColorStop(1, "#aaf593");
        this.ctx.fillStyle = my_gradient;
      }else{
        my_gradient.addColorStop(0, "red");
        my_gradient.addColorStop(1, "#b500a9");
        this.ctx.fillStyle = my_gradient; 
      }
      const h = this.heights[i];
      this.ctx.fillRect(X,this.canHeight-h,this.barWidth,h);
       X +=  this.barWidth + this.barMargin; 
    }
  }
 


}
