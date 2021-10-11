function camelize(str) {
  // ваш код...
  let array_word = str.split('-');
  for(let i = 1; i < array_word.length; i++){
      let array_letter = array_word[i].split('');
      array_letter[0] = array_letter[0].toUpperCase();
      array_word[i] = array_letter.join('');
  }
  return array_word.join('');
}
