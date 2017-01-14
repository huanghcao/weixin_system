// pages/searchend/searchend.js
const more = require('../../utils/MORE_ACTION.js');
const select = require('../../utils/util.js');
Page({
  data:{
    workYear:'不限',
    treatment_s:'不限',
    yearId:0,
    treatmentId:0,
    showYear:false,
    showTreatment:false,
    showMore:false,
    moreId:'0100',
    listId:'0101',
    contant:'',
    year:[
      {
        "year":"不限",
        "id":"0"
      },
      {
        "year":"1年以上",
        "id":"1"
      },
      {
        "year":"2年以上",
        "id":"2"
      },
      {
        "year":"3年以上",
        "id":"3"
      },
      {
        "year":"4年以上",
        "id":"4"
      },
      {
        "year":"5年以上",
  
        "id":"5"
      },
      {
        "year":"10年以上",
        "id":"6"
      }
    ],
    treatment: [
      {
        "treatment":"2000以下",
        "id":"0"
      },{
        "treatment":"2000-3000",
        "id":"1"
      },{
        "treatment":"3000-4000",
        "id":"2"
      },{
        "treatment":"4000-5000",
        "id":"3"
      },{
        "treatment":"5000-6000",
        "id":"4"
      },{
        "treatment":"6000-8000",
        "id":"5"
      },{
        "treatment":"8000-10000",
        "id":"6"
      }
    ],
    moreChild:[ ],
    moreChildList:[ ],
    searchList:[{
        id:'first',
        positionName:'传菜员',
        conpany:'深圳市大中华潮宗汇餐饮有限公司',
        time:'2016-11-01',
        money:'2001~3000',
        action:'广东 深圳',
        hot:true
    },{
        id:'second',
        positionName:'行政助理/市场营销部 Administrative Assistant/S&M',
        conpany:'深圳友和国际酒店有限公司',
        time:'2016-11-01',
        money:'面议',
        action:'广东 深圳'
    }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数;

    let list = more.list // moreChild分类
    wx.setStorage({
        key: 'moreChild',
        data:select._type(list)
    })
    this.setData({
        moreChild:select._type(list)
    })
  },
  onReady:function(){
    // 页面渲染完成
    let all =  more.all; //所有分类
    let id = "0100";
    this.setData({
        moreChildList:select.postlist(all,id)
    })
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


  // 工作年限
  workYear:function(){
    this.setData({
        showYear:!this.data.showYear,
        showTreatment:false,
        showMore:false
    })
  },
  selectYear:function(e){
    let id = e.currentTarget.dataset.id;
    let workYear = e.currentTarget.dataset.year;
    
    this.setData({
        yearId:id,
        workYear:workYear,
        showYear:!this.data.showYear,
    })
  },
  //薪资待遇
  treatment:function(){
    this.setData({
        showTreatment:!this.data.showTreatment,
        showYear:false,
        showMore:false
    })
  },
  selectTreatment:function(e){
    let id = e.currentTarget.dataset.id;
    let treatment = e.currentTarget.dataset.treatment;
    this.setData({
        treatmentId:id,
        treatment_s:treatment,
        showTreatment:!this.data.showTreatment,
    })
  },
  //更多条件
  more:function(){
      this.setData({
        showMore:!this.data.showMore,
        showYear:false,
        showTreatment:false
    })
  },
  //分出子类
  sec_child:function(e){
    let all =  more.all //所有分类
    let id = e.currentTarget.dataset.id;
    let moreChildList = select.postlist(all,id);
    var listId = id.substring(0,2)+'01';
    this.setData({
      moreChildList:moreChildList,
      moreId:id,
      listId:listId
    })
  },
  //选择子类 
  sec_child_list:function(e){
    let list = more.list // moreChild分类
    let id = e.currentTarget.dataset.id;
    let val = e.currentTarget.dataset.val;
    let faterId = id.substring(0,2)+'00';
    let moreChild =  wx.getStorageSync('moreChild');
    let newData = select.changetext(moreChild,faterId,val)
    wx.setStorage({
      key:"moreChild",
      data:newData,
      success:function(){
        console.log("yes")
      }
    })
    this.setData({
        listId:id,
        moreChild: newData
    })
  }
})