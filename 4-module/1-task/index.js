function makeFriendsList(friends) {
const ul = document.createElement('ul');
const names = friends.map(item => item.firstName + ' ' + item.lastName);
names.forEach(item => {
  li = document.createElement('li');
  li.textContent = `${item}`;
  ul.append(li);
});
return ul; 
  
}
