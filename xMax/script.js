// color eyes size picker

	const inputs = document.querySelectorAll('.controls input');


	inputs.forEach( input => input.addEventListener('change', handleUpdate) );
	inputs.forEach( input => input.addEventListener('mousemove', handleUpdate) );

	function handleUpdate() {
		const suffix = this.dataset.sizing || '';
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	}

// hat off
function hatOff() {
	const elem = document.getElementById('hat');

	if (elem.style.display === 'none') {
		elem.style.display = 'block';
	} else {
		elem.style.display = 'none';
	}
}

// new background
function newBg() {
	const img = document.getElementById('bg_image');
	var ts = new Date().getTime();
	img.src = 'https://unsplash.it/1000/800/?random&' + ts;
}