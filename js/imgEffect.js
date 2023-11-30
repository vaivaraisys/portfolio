
    const image = document.querySelector('.hoverImage');

    // Add an event listener for the mouseover event
    image.addEventListener('mouseover', function() {
      // Change the style or add/remove classes as needed
      image.style.transform = 'scale(1.1)';
    });

    // Add an event listener for the mouseout event
    image.addEventListener('mouseout', function() {
      // Reset the style or class when the mouse leaves the image
      image.style.transform = 'scale(1)';
    });