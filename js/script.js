const play = document.querySelector('.about__play')
const video = document.querySelector('.about__video video');

console.log(play)
// console.log(video)



play.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  play.classList.add('about__play--hidden');
})