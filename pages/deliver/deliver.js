// pages/deliver/deliver.js
Page({
  data:{
    current:0,
    showloding:false,
    deliver_success:[
      {
        name:'人多的名字很长很长很长很长',
        hotel_name:'酒店的名字也很长很长很长很长很长',
        time:'2016-11-25'
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        time:'2016-11-25'
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        time:'2016-11-25'
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        time:'2016-11-25'
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        time:'2016-11-25'
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        time:'2016-11-25'
      },
    ],
    have_look:[
      {
        name:'人多的名字很长很长很长很长很长',
        hotel_name:'酒店的名字也很长很长很长很长',
        action:'安徽 马鞍山',
        time:'2016-11-25',
        has_ended:false
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        action:'安徽 马鞍山',
        time:'2016-11-25',
        has_ended:true
      }
    ],
    interview:[
      {
        name:'人多的名字很长很长很长很长很长',
        hotel_name:'酒店的名字也很长很长很长很长',
        action:'安徽 马鞍山',
        time:'2016-11-25',
        has_ended:false
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        action:'安徽 马鞍山',
        time:'2016-11-25',
        has_ended:true
      }
    ],
    inappropriate:[
      {
        name:'人多的名字很长很长很长很长很长',
        hotel_name:'酒店的名字也很长很长很长很长',
        action:'安徽 马鞍山',
        time:'2016-11-25',
        has_ended:false
      },
      {
        name:'中餐厨师',
        hotel_name:'上海东方明珠大酒店',
        action:'安徽 马鞍山',
        time:'2016-11-25',
        has_ended:true
      }
    ]
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
  switchSlider:function(e){
    let current = e.currentTarget.dataset.index;
    this.setData({
        current:current
    })
  },
  changeSlider:function(e){
    let current = e.detail.current;
    this.setData({
        current:current
    })
  }
})