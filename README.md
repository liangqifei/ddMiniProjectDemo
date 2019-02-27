## 钉钉小程序 demo

---

###

1. 钉钉小程序 demo。
2. 封装了 ddrequest。
3. 封装了一些常用功能。
4. 初步使用 cavans 绘制图表
5. 初次使用花生壳做内网穿透
6. 初步使用 express+node 作为后端服务。

---

### 前端导入

> - `https://github.com/liangqifei/ddMiniProjectDemo`
> - 钉钉小程序 demo 链接地址 Fork Star(https://github.com/liangqifei/ddMiniProjectDemo)
> - 直接在钉钉小程序开发者工具打开即可

### 后端导入

> - `https://github.com/liangqifei/nodesever`
> - 数据 demo 链接地址 Fork Star(https://github.com/liangqifei/nodesever)
> - ps：技术比较菜，node 和 java 还在学习中，暂时用 express+Json 文件作为模拟数据
> - 关于内网穿透，我注册了花生壳，做的内网传图

#### express接口学习
> -router
   `app.use("/index", indexRouter)` 
> -  这里用来设置路由，假设本地服务localhost:8888,
> -  那么当请求接口localhost:8888/index,就转到indexRouter上，
 `var indexRouter = require("./routes/index");`
> - routers/index.js如下
 ```
var express = require("express");
var router = express.Router();
var utilsObj = require("../utils/result.js");//封装一下公共的数据方法

/* GET home page. */
//设置跨域请求头
router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//测试index
router.get("/", function(req, res, next) {
  res.send("index");
});
//接口 /index/auth
router.post("/auth", function(req, res, next) {
  console.log(req.body);
  let successObj = utilsObj.succsessMsg({ data: req.body });
  console.log(successObj);
  res.send(successObj);
  // next();
});
module.exports = router;

 ```
 > - utils/result.js 如下
 ```
 let Utils = {
  succsessMsg: function({ message = "", code = 200, data = {} }) {
    let errObj = {
      code: code,
      message: message,
      data: data
    };
    return errObj;
  }
};
module.exports = Utils;
 ```
---

## 大哥们多多点赞.多多交流，一起进步！！！！！
