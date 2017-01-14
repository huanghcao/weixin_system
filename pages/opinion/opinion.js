Page({
  data:{
    loading:false,
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
  getval:function(e){
    var val = e.detail.value;
    wx.setStorageSync("yijian",val)
  },
  getnum:function(e){
    var num = e.detail.value;
     wx.setStorageSync("lianxi",num)
  },
  submit:function(){
      let yiujian = wx.getStorageSync('yijian');
      let num = wx.getStorageSync('num');
      console.log( yiujian )
      this.setData({
          loading:true
      })
  }
})