// pages/systemMassage/systemMassage.js
Page({
  data:{
    massage:[
      {
        type:"自动回复自动回复自动回复自动回复自动回复自动回复",
        name:"四川岷山集团有限公司限公司限公司",
        time:"2016-13-16"
      },{
        type:"自动回复",
        name:"四川岷山集团有限公司",
        time:"2016-13-16"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  gomassage:()=>{
    wx.navigateTo({
      url: '../massageContant/massageContant',
    })
  }
})