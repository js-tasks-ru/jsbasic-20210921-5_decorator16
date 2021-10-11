function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  let ul_html = '';
  for(let i = 0; i < friends.length; i++){
    ul_html += '<li>' + friends[i].firstName + ' ' + friends[i].lastName + '</li>';
  }
  ul.innerHTML = ul_html;
  return ul;
}
