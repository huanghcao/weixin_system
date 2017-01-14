// pages/seeting/seeting.js
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
  quit:()=>{
    wx.showModal({
      title: '提示',
      content: '确定要退出吗?',
      success: function(res) {
        console.log(res)
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  }
})