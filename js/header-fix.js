function ajustaEspacoDoHeader() {
  const header = document.querySelector('.site-header');
  const altura = header.offsetHeight;
  document.body.style.paddingTop = altura + 'px';
}

window.addEventListener('load', ajustaEspacoDoHeader);
window.addEventListener('resize', ajustaEspacoDoHeader);
