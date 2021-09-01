// Nav
const mobileBtn = document.getElementById('mobile-cta');
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
	nav.classList.toggle('menu-btn');
	console.log(nav.classList)
	console.log(nav.style)
})

mobileBtnExit.addEventListener('click', () => {
	nav.classList.toggle('menu-btn');
	console.log(nav.classList)
	console.log(nav.style)
})


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});