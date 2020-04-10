const menu_button = document.getElementById('menu_button');
const navation = document.getElementById('navation')

document.addEventListener('click', () => {
  menu_button.classList.remove('active');
  navation.classList.remove('open');
});


menu_button.addEventListener('click', e=>{
  menu_button.classList.toggle('active');
  navation.classList.toggle('open');
  e.stopPropagation();
});
