//index.js
const app = getApp()

Page({
  data: {

  },
  add() {
    const db = wx.cloud.database();
    db.collection("numbers").add({
      data: {
        number: 1
      },
      success: res => {
        console.log(res)
      }
    })
  },
  change() {
    const db = wx.cloud.database();
    db.collection('numbers').doc("XBIrmN7E7L4wnqn0").update({
      data: {
        number: 2
      },
      success: res => {
        console.log(res)
      }
    })
  },
  getAll() {
    const db = wx.cloud.database();
    db.collection('numbers').where({
      _openid: "oBKO94gDelHI0dwHxTrH82OPvVVY"
    }).get({
      success: res => {
        console.log(res)
      }
    })
  },
  onLoad: function () {
    // this.init()
  },

})