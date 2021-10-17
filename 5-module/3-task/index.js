function initCarousel() {
  // ваш код...
  let slide_img = document.querySelector('.carousel__img');
  let slide_img_width = slide_img.offsetWidth;

  let carousel_inner = document.querySelector('.carousel__inner');
  
  let counter_slide = 0;
  
  let arrow_right = document.querySelector('.carousel__arrow_right');  
  
  let arrow_left = document.querySelector('.carousel__arrow_left');
  arrow_left.style.display = 'none';
 
  arrow_right.addEventListener('click', () => {
    carousel_inner.style.transform = 'translateX(-' + ++counter_slide * slide_img_width + 'px)';
    if(counter_slide == 3) arrow_right.style.display = 'none';
    if(counter_slide > 0) arrow_left.style.display = '';
  });
 
  arrow_left.addEventListener('click', () => {
    carousel_inner.style.transform = 'translateX(-' + --counter_slide * slide_img_width + 'px)';
    if(counter_slide == 0) arrow_left.style.display = 'none';
    if(counter_slide < 3) arrow_right.style.display = '';
  });

}
