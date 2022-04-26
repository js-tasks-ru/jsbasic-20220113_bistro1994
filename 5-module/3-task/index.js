function initCarousel() {
  const buttonNext = document.querySelector('.carousel__arrow_right');
  const buttonLast = document.querySelector('.carousel__arrow_left');
  const inner = document.querySelector('.carousel__inner');

  let counter = 0;
  buttonLast.style.display = 'none';
  function hideButton () {
    counter == 0 ? buttonLast.style.display = 'none' : buttonLast.style.display = '';
    counter == 3 ? buttonNext.style.display = 'none' : buttonNext.style.display = ''; 
    }
  
  buttonNext.addEventListener('click', () => {
    counter == 0 ? inner.style.transform = 'translateX(-500px)' : null;
    counter == 1 ? inner.style.transform = 'translateX(-1000px)' : null;
    counter == 2 ? inner.style.transform = 'translateX(-1500px)' : null;
    counter++;
    hideButton();
  })

  buttonLast.addEventListener('click', () => {
    counter--; 
    counter == 2 ? inner.style.transform = 'translateX(-1000px)' : null;
    counter == 1 ? inner.style.transform = 'translateX(-500px)' : null;
    counter == 0 ? inner.style.transform = 'translateX(0px)' : null;
    hideButton();
  })
  
  
}
