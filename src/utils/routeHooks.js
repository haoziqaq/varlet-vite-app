import QRCode from 'qrcode'
import wx from 'weixin-js-sdk'

export function isWechatBrowser() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

export async function showWechatQRCode() {
  let qrCodeContainer = document.getElementById('wechat-qrcode')

  if (!qrCodeContainer) {
    qrCodeContainer = document.createElement('div')
    qrCodeContainer.id = 'wechat-qrcode'

    const qrCodeText = document.createElement('div')
    qrCodeText.textContent = '请使用微信浏览器打开'
    qrCodeContainer.appendChild(qrCodeText)

    const qrCodeImage = document.createElement('img')
    const baseURL = await QRCode.toDataURL(window.location.href)
    qrCodeImage.id = 'wechat-qrcode-image'
    qrCodeImage.src = baseURL
    qrCodeContainer.appendChild(qrCodeImage)

    document.body.appendChild(qrCodeContainer)
  }
}

export function setTitle(to) {
  document.title = to.meta?.title ?? import.meta.env.VITE_TITLE
}

export function setShareConfig(config = {
  title: document.title,
  link: window.location.href
}) {
  wx.ready(function() {
    wx.onMenuShareAppMessage(config)
    wx.onMenuShareTimeline(config)
    wx.onMenuShareQQ(config)
    wx.onMenuShareWeibo(config)
    wx.onMenuShareQZone(config)
  })

  wx.onMenuShareAppMessage(config)
  wx.onMenuShareTimeline(config)
  wx.onMenuShareQQ(config)
  wx.onMenuShareWeibo(config)
  wx.onMenuShareQZone(config)
}