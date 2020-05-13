
Component({
 
  data:{
    tabbar:{},
    curRoute:''
  },
  attached(){
    this.data.tabbar = getApp().globalData.tabBar;
    // console.log(getApp().globalData.tabBar)
    let pages = getCurrentPages();
    this.data.curRoute = pages[pages.length-1].route;
    this.setData(this.data)
  },
  methods:{
    redirectTo(e){
      let taburl = e.currentTarget.dataset.taburl;
      if(taburl == this.data.curRoute) return
      wx.redirectTo({
        url:"/"+taburl
      })
    },
  }
})