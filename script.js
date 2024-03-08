const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const video = document.querySelector('.video')

btn.addEventListener('click',function(){
    video.play();
})
  
btn1.addEventListener('click',function(){
    video.pause();
})