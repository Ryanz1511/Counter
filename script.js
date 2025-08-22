const counter = document.getElementById('counter');
const increment = document.querySelector('.increment');
const reset = document.querySelector('.reset');
const decrement = document.querySelector('.decrement');
const container=document.querySelector(`.container`);
let clicksound=new Audio('click.mp3');
let Cannotdecrement=new Audio('cannot.mp3');

let text=document.createElement('p')

text.append(`Cannot Decrement Number Under 0 ! `)
text.style.color='red'


increment.addEventListener(`click`,function(){
   clicksound.pause();
   clicksound.play();
   counter.innerHTML++
})

reset.addEventListener(`click`,function(){
   counter.innerHTML=0
})
decrement.addEventListener(`click`,function(){
    if (counter.innerHTML<=0) {
      Cannotdecrement.pause();
      Cannotdecrement.play();
      container.classList.add('blink');
      container.classList.add('shake');
      setTimeout(() => {
         container.classList.remove('blink');
         container.classList.remove('shake');
      }, 500);
        document.body.appendChild(text)
        setTimeout(function() {
          document.body.removeChild(text)
        }, 1050);
        return counter.innerHTML=0
    }
   clicksound.pause();
   clicksound.play();
   counter.innerHTML--
})


