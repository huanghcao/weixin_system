var app = getApp()
Page({
  data:{
    hidden_password:true,
    close_img:false
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
  change_password:function(){
      this.setData({
          hidden_password : !this.data.hidden_password,
          close_img : !this.data.close_img
      })
  }
})