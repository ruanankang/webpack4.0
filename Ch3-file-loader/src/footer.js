function Footer() {
  const div = document.getElementsByTagName('div')[0];
  const footer = document.createElement('div');
  footer.innerText = 'Footer';
  div.appendChild(footer);
}

module.exports = Footer;