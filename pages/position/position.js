// pages/position/position.js
Page({
  data:{
    current:0,
    position:{
      name:'酒店总经理/店长助理(北京)',
      salary:'8001-10000',
      company:'格林豪泰酒店(中国)有限公司',
      time:'2016-08-24',
      people_country:'招10人',
      education:'大专',
      fili:'提供食宿',
      date:'25-40',
      action:'北京',
      work_long:'2年经验',
      position_type:'全职',
      position_detail:'xxxxxxxxxxxxxxxposition_detailposition_detailposition_detailposition_detailxx',
      else_position:'',
      comapny_img:'image/555.png',
      industry:'酒店业',
      xingzhi:'',
      guimo:'10000人以上',
      xingji:10,
      zhishu:'20',
      linkman:'黄超',
      phone:'18012806480',
      email:'781945110@qq.com',
      address:'杭州市萧山区市中心路路8l18号'
    },
    biaoqian:['五险一金',"技能培训","带薪年假","岗位晋升","领导好","帅哥多"],
    otherList:[{
        id:'first',
        positionName:'传菜员',
        conpany:'深圳市大中华潮宗汇餐饮有限公司',
        time:'2016-11-01',
        money:'2001~3000',
        action:'广东 深圳'
    },{
        id:'second',
        positionName:'行政助理/市场营销部 Administrative Assistant/S&M',
        conpany:'深圳友和国际酒店有限公司',
        time:'2016-11-01',
        money:'面议',
        action:'广东 深圳'
    }]
  },
  onLoad:function(options){
    let job_id = options.job_id;
    wx.request({
      url: 'http://mobile.interface.veryeast.cn/job/detail',
      data:{'job_id':752724},
      method: 'POST',
      success: function(res){
        // console.log( res )
      },
      fail: function() {
        console.log("请求失败")
      }
    });
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