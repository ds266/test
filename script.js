 const audio = document.getElementById('myAudio');
 const button = document.getElementById('playPauseButton');

  button.addEventListener('click', () => {
  if (audio.readyState >= 4) {
    if (audio.paused) {
      audio.play();
      button.textContent = 'Остановить музыку';
    } else {
      audio.pause();
      button.textContent = 'Воспроизвести музыку';
    }
}
  });

audio.addEventListener('playing', () => {
      button.textContent = 'Остановить музыку';
  });

  audio.addEventListener('pause', () => {
      button.textContent = 'Воспроизвести музыку';
  });
