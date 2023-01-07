function myColor(evt){
    evt.preventDefault();
	alert('My favorite color is green');
}
function myPlace(evt){
    evt.preventDefault();
	alert('My favorite place is my house');
}
function myRitual(evt){
    evt.preventDefault();
	alert('My favorite ritual is making a parfait every morning for breakfast');
}
let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', myColor);
place.addEventListener('click', myPlace);
ritual.addEventListener('click', myRitual);