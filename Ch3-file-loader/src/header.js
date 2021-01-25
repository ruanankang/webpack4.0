function Header() {
  const div = document.getElementsByTagName('div')[0];
  const header = document.createElement('div');
  header.innerText = 'Header';
  div.appendChild(header);
}

export default Header;