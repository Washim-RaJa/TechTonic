const hamburgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const sliderMenu = document.querySelector('.slider-menu');

hamburgerMenuBtn.addEventListener('click', ()=> {
            
    if (hamburgerMenuBtn.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
        hamburgerMenuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    } else {
        hamburgerMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        
    }
    sliderMenu.classList.toggle('slidingEffect')
})
