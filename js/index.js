//функция для смены класса у блока
const changeActiveBlock = function(block, nameClass) {
    block.classList.toggle(nameClass)
}
//анимация и поведение мобильного меню
const headerBurger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-nav');
const menuLink = document.querySelectorAll('.header-link');

headerBurger.addEventListener('click', () => {
  changeActiveBlock(headerBurger, 'active');
  changeActiveBlock(menu, 'mobile');
})
menuLink.forEach(link => link.addEventListener('click', () => {
  changeActiveBlock(menu, 'mobile');
  changeActiveBlock(headerBurger, 'active');
}))

//слайдер
new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
    speed: 500,
});
