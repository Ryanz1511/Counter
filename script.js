const counter = document.getElementById('counter');
const increment = document.querySelector('.increment');
const reset = document.querySelector('.reset');
const decrement = document.querySelector('.decrement');
const container = document.querySelector('.container');

let clicksound = new Audio('click.mp3');
let Cannotdecrement = new Audio('cannot.mp3');

let text = document.createElement('p');
text.append(`Cannot Decrement Number Under 0 ! `);
text.style.color = 'red';


function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

increment.addEventListener('click', function () {
  playSound(clicksound);
  counter.innerHTML++;
});

reset.addEventListener('click', function () {
  counter.innerHTML = 0;
});

decrement.addEventListener('click', function () {
  if (counter.innerHTML <= 0) {
    playSound(Cannotdecrement);

    container.classList.add('blink', 'shake');
    setTimeout(() => {
      container.classList.remove('blink', 'shake');
    }, 500);

    document.body.appendChild(text);
    setTimeout(function () {
      document.body.removeChild(text);
    }, 1050);

    return (counter.innerHTML = 0);
  }

  playSound(clicksound);
  counter.innerHTML--;
});
