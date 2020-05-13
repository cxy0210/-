
let app = getApp();

export default ({ url, data, loadingTop, loadingCenter=true }) => new Promise((resolve, reject) => {
  
  if (loadingTop) {
    wx.showNavigationBarLoading()
  } else if (loadingCenter) {
    wx.showLoading({
      title: '加载中',
    })
  }

  wx.request({
    url: app.globalData.baseUrl + '/v2' + url,
    data: data,
    header: {
      "content-type": "json"
    },
    method: 'GET',
    success: function (res) {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading()
      }
      resolve(res)
    },
    fail: function (err) {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading({
          title: '加载中',
        })
      }
      reject(err)
    },
    complete: function () {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading()
      }
    }
  })


})