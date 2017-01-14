// pages/register/register.js
Page({
  data:{
    hidden_password:true
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
  checkboxChange:function(e){
    let val = e.detail.value;
    console.log( val )
    if( val.length == 1 ){
      this.setData({
        hidden_password:false
      })
    }else if(val.length == 0 ) {
      this.setData({
        hidden_password:true
      })
    }
  }
})