// pages/changepassword/changepassword.js
Page({
  data:{
    odd_pas:false,
    newpas:false,
    newpas_two:false,
    init_val:'',
    new_val:'',
    new_val_two:''
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

  // 原始密码
  odd_pas:function(e){
    let odd = e.detail.value;
    if( odd == '' ){
      this.setData({
        odd_pas:false
      })
    }else{
      this.setData({
        odd_pas:true,
        init_val:odd
      })
    }
    
  },
  clean_odd_pas:function(){
    // console.log( 'odd' )
    this.setData({
        init_val:'',
        odd_pas:false
      })
  },
  // 新密码
  newpas:function(e){
    let odd = e.detail.value;
    if( odd == '' ){
      this.setData({
        newpas:false
      })
    }else{
      this.setData({
        newpas:true,
        new_val:odd
      })
    }
  },
  clean_new_pas:function(){
    this.setData({
        new_val:'',
        newpas:false
    })
  },
  // 重复新密码
  newpas_two:function(e){
    let new_two = e.detail.value;
    if( new_two == '' ){
      this.setData({
        newpas_two:false
      })
    }else{
      this.setData({
        newpas_two:true,
        new_val_two:new_two
      })
    }
  },
  clean_new_pas_two:function(){
    this.setData({
        new_val_two:'',
        newpas_two:false
    })
  }
})