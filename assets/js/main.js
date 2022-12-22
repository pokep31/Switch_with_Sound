let btn = document.querySelector('.btn'),
    body = document.querySelector('body'),
    audio = document.querySelector('#audio');

btn.onclick = function(){
  body.classList.toggle('on');
  audio.play()
}
