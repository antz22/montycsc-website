const mobileBtn = document.getElementById('mobile-cta');
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
	// nav.style.display = 'block';
	// mobileBtn.style.display = 'none';
	nav.classList.toggle('menu-btn');
	console.log(nav.classList)
	console.log(nav.style)
})

mobileBtnExit.addEventListener('click', () => {
	// nav.style.display = 'none';
	// mobileBtn.style.display = 'block';
	nav.classList.toggle('menu-btn');
	console.log(nav.classList)
	console.log(nav.style)
})