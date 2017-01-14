// pages/howPublic/howPublic.js
Page({
  data:{
    _public:'',
    arr:['对所有公开','只公开Email','完全保密']
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let _public = options.public;
     this.setData({
       _public:_public
     })
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
  data_back:function(e){
     let status = e.currentTarget.dataset.status;
     this.setData({
       _public:status
     })
    //  wx.navigateBack()
  }
})