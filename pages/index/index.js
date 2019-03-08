import { Dd_navigateTo } from "../../util/filter.js"
import {getRequest,getRequest2,postRequest2 } from '../../util/server/ddAjax.js'
import {activityUrl,authUrl} from "../../util/server/config.js"
Page({
  data: {
    piclist: [{
      name:'dlldl'
    },{
      name:'dlldl'
    },{
      name:'dlldl'
    }],
    titleList:[{
      name:"全部"
    },{
      name:"我参与的"
    },{
      name:"我负责的"
    }]
  },
  onLoad(query) {
    // 页面加载
    // this.getInit();
  },
  clicka(){
    alert("clicka")
  },
  onCounterPlusOne(data){
    console.log(data)
    dd.alert("onCounterPlusOne")
  },
  goCavans(e) {
    console.log( {
      name: e.currentTarget.dataset.name,
      imageurl: encodeURIComponent(e.currentTarget.dataset.imageurl)
    });
    Dd_navigateTo("../cavans/cavans", {
      name: e.currentTarget.dataset.name,
      imageurl: encodeURIComponent(e.currentTarget.dataset.imageurl)
    });
  },
  onReady() {
    
    // 页面加载完成
  },
  getInit(){
    getRequest2({
      url:activityUrl, 
      data:{},
      onSuccess:(res)=>{
        this.setData({
          piclist:res.data
        })
      },
      onComplete:()=>{

      }
    });
postRequest2({
      url:authUrl, 
      data:{ pageNum: 1,list:[{num:1},{num:2}]},
      onSuccess:(res)=>{
        this.setData({
          piclist:res.data
        })
      },
      onComplete:()=>{

      }
    });
    
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
