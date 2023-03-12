window.addEventListener('scroll', function() {
    var element = document.querySelector('.maincontent');
    if (window.scrollY > 10) {
      main-content.classList.add('animate');
    } else {
      main-content.classList.remove('animate');
    }
  });
  