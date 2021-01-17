const buttonSubmenu = document.querySelector('#button-submenu')
const submenuElement = document.querySelector('.submenu')

buttonSubmenu.addEventListener('click', () => {
  buttonSubmenu.checked === true ? submenuElement.classList.remove('hide')
    : submenuElement.classList.add('hide')
})