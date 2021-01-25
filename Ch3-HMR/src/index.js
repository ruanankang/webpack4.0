import Avatar from './avatar.jpg';
import './index.css';
import './style.css';

const img = new Image();
img.src = Avatar;

const div = document.getElementsByTagName('div')[0];
div.append(img);

const body = document.getElementsByTagName('body')[0];
const btn = document.createElement('button');
btn.innerHTML = '新增';
body.appendChild(btn);

const ul = document.createElement('ul');
body.appendChild(ul);
btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = `${parseInt(Math.random() * 10)}`;
  ul.appendChild(li);
})