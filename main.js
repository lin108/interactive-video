//video play and pause button
var video = document.getElementById("backgroundVideo");
var btn = document.getElementById("myBtn");
var popup = document.getElementById('popup');
// let time = Math.floor(video.duration) * 1000;
// time = time + 1000;
// console.log(time);



function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//modal pop up when video stops
window.onload = function() {
  setInterval(pop, 1000);
}

function pop() {
  if (video.ended) {
    $('#popup').modal('show');
  }
}

function ended(){
 video.currentTime = video.duration;
}


function faster(){
  video.playbackRate = video.playbackRate + 1;
}



//get current page video index
var addr = document.getElementById('backgroundVideo').src;
var currentVideo = addr;
console.log(addr);

function getUrl() {
  for (let i = 1;i<addr.length;i++){
    currentVideo = addr.substring(addr.indexOf('/') + 1);
    addr = currentVideo;
  }
  return currentVideo;
}
currentVideo = getUrl();
console.log(currentVideo);






$(document).ready(function(){
            $(window).scroll(function(){
                $('.header-bg').css("opacity", 1- $(window).scrollTop() / 700)
            })
        })
