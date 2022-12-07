//функция для смены класса у блока
const changeActiveBlock = function(block, nameClass) {
    block.classList.toggle(`${nameClass}`)
}
//анимация бургер-меню
const headerBurger = document.querySelector('.header-burger');
headerBurger.addEventListener('click', () => {
  changeActiveBlock(headerBurger, 'active');
})

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
