// JavaScript source code

AFRAME.registerComponent('avionraycastmanager',
{
init: function( )
{	
	var avion = document.getElementById('avion');
	var trigger_dest = document.getElementById('trigger_destination');
	var trigger_machine = document.getElementById('trigger_machine_transport');

	trigger_machine.addEventListener('click', function( evt ) {avion.setAttribute('raycaster', {objects: '.actif',interval: 1});avion.setAttribute('cursor', {fuse: 'true'}); 
	console.log('the avion raycaster+cursor now exists'); });

	trigger_dest.addEventListener('click', function( evt ) {avion.removeAttribute('raycaster'); avion.removeAttribute('cursor'); 
	console.log('the avion raycaster+cursor is no more'); });

}
});