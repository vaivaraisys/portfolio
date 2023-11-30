 /* progress bar */
 document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progress-bar");
    var progressContainer = document.getElementById("progress-container");

    function updateProgressBar() {
      var scrollPosition = window.scrollY;
      var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercentage = (scrollPosition / documentHeight) * 100;
      progressBar.style.width = scrollPercentage + "%";
    }

    function showHideProgressBar() {
      if (window.scrollY > 20) {
        progressContainer.style.display = "block";
      } else {
        progressContainer.style.display = "none";
      }
    }

    // Update progress bar on scroll
    window.addEventListener("scroll", function() {
      updateProgressBar();
      showHideProgressBar();
    });

    // Update progress bar on window resize
    window.addEventListener("resize", function() {
      updateProgressBar();
    });
  });