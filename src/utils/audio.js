export function createBGM(src) {
  const bgm = document.getElementById('bgm')
  bgm && document.body.removeChild(bgm)

  const audio = document.createElement('audio')
  audio.src = src
  audio.loop = true
  audio.preload = true
  audio.id = 'bgm'

  document.addEventListener('WeixinJSBridgeReady', () => {
    audio.play()
  })

  document.body.appendChild(audio)
  audio.play()
}

export function playBGM() {
  document.getElementById('bgm').play()
}

export function resetBGM() {
  const audio = document.getElementById('bgm')
  audio.currentTime = 0
  audio.pause()
}

export function pauseBGM() {
  document.getElementById('bgm').pause()
}
