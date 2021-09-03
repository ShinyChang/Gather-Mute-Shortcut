;(() => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const getIsMute = () => {
    const key = `${window.location.pathname.split('/').slice(2).join("\\")}/audioMuteClicked`
    return localStorage.getItem(key) === 'true'
  }
  const getAudioButton = () => {
    return document.querySelector('.GameVideo-self-video-container button')
      || document.querySelector('.GameVideosContainer-videobar-content button')
      || document.querySelector('.GameCanvasContainer-main button')
  }

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') {
      return
    }
    const audioBtn = getAudioButton()
    if (!audioBtn) {
      return
    }
    const isMute = getIsMute();
    if (!e.repeat) {
      if (e.key === ' ') {
        e.stopPropagation()
        e.preventDefault();
        if (isMute) {
          audioBtn.click()
        }
      }
    }

    if (e.key.toUpperCase() === 'D' && (isMac ? e.metaKey : e.ctrlKey)) {
      e.stopPropagation()
      e.preventDefault();
      audioBtn.click()
    }
  }, {capture: true})

  window.addEventListener('keyup', (e) => {
    if (e.target.tagName === 'INPUT') {
      return
    }
    if (e.key === ' ') {
      e.stopPropagation()
      e.preventDefault();
      const audioBtn = getAudioButton()
      if (!audioBtn) {
        return
      }
      const isMute = getIsMute();
      if (!isMute) {
        audioBtn.click()
      }
    }
  }, {capture: true})
})();
