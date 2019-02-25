Page({
  data: {
    imageurl: "",
    name: "",
    info: "happy Chrismas!",
    person: "lqf"
  },
  onLoad(options) {
    console.log(decodeURIComponent(options.imageurl))
    this.setData({
      name: options.name,
      imageurl: decodeURIComponent(options.imageurl)
    })
  },

  onReady() {
    this.point = {
      x: Math.random() * 295,
      y: Math.random() * 295,
      dx: Math.random() * 5,
      dy: Math.random() * 5,
      r: Math.round(Math.random() * 255 | 0),
      g: Math.round(Math.random() * 255 | 0),
		  b: Math.round(Math.random() * 255 | 0),
    };
this.draw() 
    // this.interval = setInterval(() => {this.draw() }, 17);
  },

  draw() {
    var ctx = dd.createCanvasContext('canvas');
    ctx.setFillStyle('#eee');
    ctx.fillRect(0, 0, 300, 300);
    
    ctx.moveTo(50,50);
    ctx.lineTo(50,250);
    ctx.lineTo(250,250);
    ctx.stroke();
    
    ctx.beginPath();
    //计算坐标值
    //直方图宽度
    var dataArr = [
        {type:'程序员',count:800,color:'blue',number:47},
        {type:'测试',count:500,color:'red',number:45},
        {type:'设计师',count:450,color:'hotpink',number:87},
        {type:'架构师',count:200,color:'orange',number:27},
        {type:'产品',count:250,color:'green',number:18},
        {type:'程序员鼓励师',count:400,color:'yellow',number:30}
    ];
    var width = 20;
    //间隔
    var gap = (300-100-width*dataArr.length)/(dataArr.length+1);
    for (var i = 0; i < dataArr.length; i++) {
        //计算每个数据的横坐标
        var x = 50+gap+i*(width+gap);
        //计算每个数据的高度
        var height = (300-100)/100*dataArr[i].number;
        //计算每个数据的纵坐标
        var y = 300-50-height;
        //绘制四边形（带描边）
        ctx.fillStyle ="blue";
        ctx.fillRect(x, y, width, height);        
    }
    ctx.draw();
    // ctx.arc(this.point.x, this.point.y, 10, 0, 2 * Math.PI);
    // ctx.setFillStyle("rgb(" + this.point.r + ", " + this.point.g + ", " + this.point.b + ")");
    // ctx.fill();
    // ctx.draw();

    // this.point.x += this.point.dx;
    // this.point.y += this.point.dy;
    // if (this.point.x <= 5 || this.point.x >= 295) {
    //   this.point.dx = -this.point.dx;
    //   this.point.r = Math.round(Math.random() * 255 | 0);
    //   this.point.g = Math.round(Math.random() * 255 | 0);
    //   this.point.b = Math.round(Math.random() * 255 | 0);
    // }

    // if (this.point.y <= 5 || this.point.y >= 295) {
    //   this.point.dy = -this.point.dy;
    //   this.point.r = Math.round(Math.random() * 255 | 0);
    //   this.point.g = Math.round(Math.random() * 255 | 0);
    //   this.point.b = Math.round(Math.random() * 255 | 0);
    // }
  },
  drawBall() {

  },
  log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y);
    } else {
      console.log(e.type);
    }
  },
  onUnload() {
    clearInterval(this.interval)
  }
});
