document.addEventListener("DOMContentLoaded", () => {
	// LINK
	let link = document.querySelector('.link');

	link.addEventListener('click', () => {
		let letter = link.querySelectorAll('.letter');
		anime.remove(letter);
		anime.timeline({
			targets: letter,
		})
		.add({
			translateX: [0, -30],
			opacity: [1, 0],
			easing: 'easeInExpo',
			duration: 500,
			delay: (el, i) => 30 * i,
		})
		.add({
			translateX: [40, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 1100,
			delay: (el, i) => 30 * i,
		})
	})

	//LINK TWO
	let linkTwo = document.querySelector('.link-two');

	linkTwo.addEventListener('click', () => {
		let letterTwo = linkTwo.querySelectorAll('.letter-two');
		anime.remove(letterTwo);
		anime.timeline({
			targets: letterTwo,
		})
		.add({
			translateY: [0, -30],
			opacity: [1, 0],
			easing: 'easeInExpo',
			duration: 500,
			delay: (el, i) => 30 * i,
		})
		.add({
			translateY: [40, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 1100,
			delay: (el, i) => 30 * i,
		})
	})

})
