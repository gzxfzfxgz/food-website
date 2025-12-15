document.addEventListener('DOMContentLoaded',function(){
	const menuBtn = document.querySelector('.menu-btn');
	const navLinks = document.querySelector('.nav-links');

	if (menuBtn) {
		menuBtn.addEventListener('click',function() {
			navLinks.classList.toggle('active');
		});
	}

	document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
		anchor.addEventListener('click',function(e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			if (targetId === '#') return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				window.scrollTo({
					top:targetElement.offsetTop - 80,
					behavior: 'smooth'
				});

				if (navLinks.classList.contains('active')) {
					navLinks.classList.remove('active');
				}
			}
		});
	});

    const animateOnScroll = function() {
	    const elements = document.querySelectorAll('.feature-card, .product-card, .team-member');

	    elements.forEach(element => {
		    const elementPosition = element.getBoundingClientRect().top;
		    const screenPosition = window.innerHeight / 1.2;

		    if (elementPosition < screenPosition) {
			    element.style.opacity = '1';
			    element.style.transform = 'translateY(0)';
		    }
	    });
    };

    const initAnimation = function() {
	    const elements = document.querySelectorAll('.feature-card, .product-card, .team-member');

	    elements.forEach(element => {
		    element.style.opacity = '0';
		    element.style.transform = 'translateY(20px)';
		    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
	    });

	    window.addEventListener('scroll', animateOnScroll);
	    animateOnScroll();
    };

    initAnimation();
});