// let overlayBtn = document.querySelector('.overlay-btn');
// let cardBody = document.querySelector('.card-body');

let funcTest = document.querySelector('.funcTest')
let hide = document.querySelector('.hide');
let show = document.querySelector('.hidden')
let close = document.querySelector("overlay-close");

// overlayBtn.addEventListener('click', function() {
//   cardBody.classList.add('bg-active');
// })

function on() {
  document.getElementById("overlay").style.display = "block";
  // funcTest.classList.add("bg-active");
  // hide.classList.add("inactive");
  // $(".hidden").removeClass("hidden");
}
function off() {
  document.getElementById("overlay").style.display = "none";
  // funcTest.removeClass("bg-active");
  // hide.removeClass("inactive");
  // $(".hidden").classList.add("hidden");
}