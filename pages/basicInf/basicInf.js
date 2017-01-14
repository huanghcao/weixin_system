// pages/basicInf/basicInf.js
var appInstance = getApp()
Page({
  data:{
    data:'1993-04-07',
    graduate:'2015-07-01',
    sex:'男',
    education:'博士',
    job:'请选择',
    codeType:'请选择',
    marriage:'保密',
    mianmao:'团员',
    nation:'请选择',

    presentAddress:'杭州',
    placeOfDomicile:'河南'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    try {
      var gener = wx.getStorageSync('gener');
      var status = wx.getStorageSync('status');
      if (gener && status) {
          this.setData({
            gener:status
          })
          console.log( typeof gener )
      }
    } catch (e) {
      // Do something when catch error
    }
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  dataOfBirth:function(e){
    let data = e.detail.value;
    this.setData({
        data:data
    })
  },
  dataOfGraduate:function(e){
    this.setData({
      graduate:e.detail.value
    })
  },
  data_back:function(e){
    let _type = e.currentTarget.dataset.gener;
    wx.navigateTo({
      url: '../commonSelect/commonSelect?gener='+_type,
      success:function(){  //移除status状态;
        wx.removeStorage({
          key: 'status',
          success: function(res) {
            console.log(res.data)
          } 
        })
      }
    })
  },

})