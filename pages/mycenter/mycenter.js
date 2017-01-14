// pages/mycenter/mycenter.js
Page({
  data:{},
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
  more:()=>{
    wx.navigateTo({
      url: '../more/more'
    })
  },
  // go我的简历
  myresume:function(){
              //先判断是否登录
    wx.navigateTo({
      url: '../myresume/myresume'
    })
  },
  //go职位收藏
  collect:function(){
            //先判断是否登录
    wx.navigateTo({
      url: '../collect/collect'
    })
  }
})