// back to top button
let myButton = document.querySelector("#topButton");


function topFunction() {
    console.log('top!')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// welcome page on load
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('welcome-modal');
    const closeButton = document.getElementById('close-welcome');
  
    modal.style.display = 'block';
  
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });

 