function toggleText() {
  // ваш код...
  let row_text = document.querySelector('#text');
  let switch_button = document.querySelector('.toggle-text-button');
  switch_button.addEventListener('click', () => {
    if(row_text.hidden === false){
      row_text.hidden = true;
    } else {
      row_text.hidden = false;
    }
  });
}
