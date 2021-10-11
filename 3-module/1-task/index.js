function namify(users) {
  // ваш код...
  let arr = [] ;
  users.map(item => arr.push(item.name));
  return arr;
}
