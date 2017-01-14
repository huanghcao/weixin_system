//home.js
Page({
  data:{
    action:"杭州",
    imgUrls:[
      
    ],
    remenList:[

    ],
  },
  
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let _that = this;
    wx.setStorageSync( "home_page",1,);
     wx.showNavigationBarLoading() //顶部显示加载动画

     wx.request({ //banner图
      url: 'http://mobile.interface.veryeast.cn/client/util/ads',
      method: 'POST',
      success: function(res) {
        let status = res.data.status;
        let data = res.data.data;
        if( status == 1 ){
            _that.setData({
              imgUrls : data
            })
        }else{
            console.log("接口挂了")
        }
      },
      fail: function(){
        console.log("请求失败")
      }
    })
    wx.request({//职位推荐
      url: 'http://mobile.interface.veryeast.cn/user/recommended_jobs',
      method: 'POST',
      success: function(res) {
        let status = res.data.status;
        let remenList = res.data.data.list.data;
        let allPage = res.data.data.list.pager.allPages;
         remenList.map(function(item){
           return Object.assign(item, { update_time: item.update_time.substring(0,10) })
        })
        if( status == 1 ){
            wx.hideNavigationBarLoading()
            _that.setData({
              remenList : remenList
            })
            //缓存当前页数总页数list;
            wx.setStorageSync( "home_page",1,);
            wx.setStorageSync( "all_pages",allPage);
            wx.setStorageSync( "remenList",remenList);
        }else{
          console.log("接口挂了")
        }
      },
      fail: function(){
        console.log("请求失败")
      }
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
  go_to_search:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
   onShareAppMessage: function () { //用户的分享
    return {
      title: '最佳东方小程序',
      desc: '当前的版本1.0.0',
      path: '/pages/home/home'
    }
  },
  onPullDownRefresh:function(){  //下拉刷新 在home.josn中开启;
      console.log( "上啦刷新" )
      setTimeout(function(){
        wx.stopPullDownRefresh()
      },500)
  },
  onReachBottom:function(){//页面触底
    wx.showNavigationBarLoading();
    let _that = this;
    let bol = true;
    try {
      let page = parseInt( wx.getStorageSync('home_page') )+1;
      let all_page = wx.getStorageSync('all_pages');
      page <= all_page ? bol =  true:bol = false;
      if (page && all_page && bol ) { //成功获取页码,并且小于总页码;
          wx.request({//职位推荐
            url: 'http://mobile.interface.veryeast.cn/user/recommended_jobs',
            data:{
              "page":page
            },
            method: 'POST',
            success: function(res) {
              let status = res.data.status;
              let newList = res.data.data.list.data;
              let allPage = res.data.data.list.pager.allPages;
              newList.map(function(item){
                return Object.assign(item, { update_time: item.update_time.substring(0,10) })
              })
              if( status == 1 ){
                  let remenList = wx.getStorageSync('remenList');
                  let zhiweiList = remenList.concat(newList);
                  _that.setData({
                    remenList : zhiweiList
                  })
                  //缓存当前页数总页数list;
                  wx.hideNavigationBarLoading();
                  wx.setStorageSync("home_page", page);
                  wx.setStorageSync("all_pages", allPage);
                  wx.setStorageSync("remenList", zhiweiList);
              }else{
                 console.log("接口挂了")
              }
            },
            fail: function(){
              console.log("请求失败")
            }
          })
      }else{ //已加载完所有page;
        wx.showModal({
          title: '提示',
          content: '正在努力加载...'
        })
      }

    } catch (e) {
      console.log( "获取page || all_page出错" )
    }
  },
  goZhihiWeiList:function(e){
      let c_userid = e.currentTarget.dataset.c_userid;
      let job_id = e.currentTarget.dataset.job_id;
      wx.navigateTo({
        url: '../position/position?job_id='+job_id,
      })
  }
})

