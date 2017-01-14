// pages/jobstatus/jobstatus.js
Page({
  data:{
    status:'',
    arr:['正在找工作','我愿意考虑好的工作机会','暂时不想找工作']
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
     let status = options.status;
     this.setData({
       status:status
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
       status:status
     })
     wx.navigateBack()
  }
})