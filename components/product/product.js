// components/product/product.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
    },
    clickBl:{
      type:Boolean,
      value:false
    },
    api:{
      type:String,
      value:'movie'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(){
      if (this.properties.clickBl){
        wx.navigateTo({
          url: '/pages/item/item?id=' + this.properties.item.id + '&api=' + this.properties.api,
        })
      }
      
    }
  }
})
