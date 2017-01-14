const method = require('../../utils/methond.js');
var app = getApp()
Page({
  data:{
    action:'',
    position_type:'',
    search_history:[{
        position_name:'职位名称职位名称职位名称职位名称职位名称',
        company_num:'12'
    }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    var has_select_temp = wx.getStorageSync('has_select') || []; //选择的工作地点
    var has_post_tep = wx.getStorageSync('has_post') || [];//选择的职位
      this.setData({
        action:method.has_(has_select_temp,'city'),
        position_type:method.has_(has_post_tep,'post')
      })
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  user_import:(e)=>{
    let value = e.detail.value;
    wx.setStorage({
      key:"user_import",
      data:value
    })
  },
  search:(e)=>{
    let id = app.data.searchId;
    try {
      let city_arr = wx.getStorageSync('has_select') || [];
      let post_arr = wx.getStorageSync('has_post') || [];
      let user_import = wx.getStorageSync('user_import');//用户输入的内容;
      let city_id,post_id;
      if (city_arr =='' && post_arr == '' && user_import == '' ) {
          wx.showModal({
          showCancel:false,
          content: '请选择地点或职位名',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }else{
        city_id = city_arr.map(function(item){
            return item.id
        }); //用户选择的城市id
        post_id = city_arr.map(function(item){
            return item.id
        }); //用户选择的职位id;
        wx.redirectTo({
          url:"../searchend/searchend?user_import"+user_import+"&city_id"+city_id+"&post_id"+post_id,
          success:function(){
            wx.removeStorage({key: 'user_import'});
          }
        })
      }
    } catch (e) {
      console.log(e);
    }
  }
})