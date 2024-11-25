window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const divs = document.querySelectorAll('.fadein');
  
    divs.forEach(function(div) {
      const distanceToBox = div.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        div.classList.add('is-active');
      }
    });
  });