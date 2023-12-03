
    const image = document.querySelector('.hoverImage');

   
    image.addEventListener('mouseover', function() {
      // Change the style or add/remove classes as needed
      image.style.transform = 'scale(1.1)';
      image.style.transition = "transform .8s ease-in-out"
    });

    
    image.addEventListener('mouseout', function() {
      // Reset the style or class when the mouse leaves the image
      image.style.transform = 'scale(1)';
    });