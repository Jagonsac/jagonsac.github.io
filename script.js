window.addEventListener('scroll', function() {
    var element = document.querySelector('.element');
    if (window.scrollY > 500) {
      main-content.classList.add('animate');
    } else {
      main-content.classList.remove('animate');
    }
  });
  