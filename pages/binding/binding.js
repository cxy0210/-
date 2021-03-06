// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attendSuccessImg: "",
    canvasImgUrl:'',
    src:"",
    show:false,
  },
  scanCode: function() {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
     // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;

        that.setData({
          attendSuccessImg: tempFilePaths[0]
        });

        // 上传图片
        //判断机型
        var model = "";
        wx.getSystemInfo({
          success: function (res) {
            var that = this;
            model = res.model;
          }
        })
        if (model.indexOf("iPhone") <= 0) {
          // that.uploadFileOpt(that.data.attendSuccessImg);
          console.log(111111)
        } else {
          drawCanvas();

        }

        // 缩放图片
        function drawCanvas() {
          const ctx = wx.createCanvasContext('attendCanvasId');
          ctx.drawImage(tempFilePaths[0], 0, 0, 94, 96);
          ctx.draw();
          that.prodImageOpt();
        }
      }
    });
  },

  // 生成图片
  prodImageOpt: function () {
    var that = this;
    wx.canvasToTempFilePath({
      canvasId: 'attendCanvasId',
      success: function success(res) {
        that.setData({
          canvasImgUrl: res.tempFilePath
        });
        // 上传图片
        that.uploadFileOpt(that.data.canvasImgUrl);
      },
      complete: function complete(e) {
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})