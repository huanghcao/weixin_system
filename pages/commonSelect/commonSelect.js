// pages/commonSelect/commonSelect.js
const method = require("../../utils/methond.js");
Page({
  data:{
    arr:[],
    status:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let gener = options.gener;
    wx.setStorage({
      key:"gener",
      data:gener
    })
    this.setData({
      arr:method.mate(gener).arr
    })
    wx.setNavigationBarTitle({
      title: method.mate(gener).title
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
  data_sel:function(e){
    let status =  e.currentTarget.dataset.status;
    let _that = this;
    wx.setStorage({
      key:"status",
      data:status,
      success:function(){
        _that.setData({
          status:status
        })
        setTimeout( wx.navigateBack,200 )
      }
    })
  }
})