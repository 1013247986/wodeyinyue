const app = getApp();
import { getAjax } from "../../public/public.js"
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    back: app.globalData.back, //背景色
    colors: app.globalData.colors, //字体颜色
    boxcolor: app.globalData.boxcolor, // 盒子背景色
    // 组件所需的参数
    nvabarData: {
      title: 'K歌', //导航栏 中间的标题
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 62,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // getAjax("http://m.kugou.com/plist/list/2095384?json=true", {})
    //   .then(data => {
    //     console.log(data)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // getAjax("http://m.kugou.com/plist/index&json=true", {})
    //   .then(data => {
    //     console.log(data)
    //   }).catch(err => {
    //     console.log(err)
    //   })
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
        bottbfimgbtn: app.globalData.bottbfimgbtn,
        singerName: app.globalData.name,
        songName: app.globalData.songName,
        bfbtn: app.globalData.bfbtn,
        shouchangbtn: app.globalData.shouchangbtn
      })
    }
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