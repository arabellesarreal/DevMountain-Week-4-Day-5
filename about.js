
function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submit');
}

function handleCompliment(evt) {
	evt.preventDefault();
	alert('You\'re beautiful.');
}

let form = document.querySelector('#contact');
let image = document.querySelector('img');
form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', handleCompliment);