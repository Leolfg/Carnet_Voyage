// JavaScript source code
						AFRAME.registerComponent('stove-listener',
			{
				init: function( )
				{
					var a_cube = this.el;

					a_cube.addEventListener('click', function( evt ) { checkingredients(); console.log('the stove has been activated'); });
				
				}
			});

			function checkingredients(){
			var patate =  document.getElementById("patate_pot").getAttribute('visible');
			var carotte =  document.getElementById("carotte_pot").getAttribute('visible');
			var onion =  document.getElementById("onion_pot").getAttribute('visible');

			console.log(' patate '+ patate+' carotte '+carotte+' onion '+onion);

				if (patate && carotte && onion){
					document.getElementById("soupe_plane").setAttribute("visible", "true");
					document.getElementById("soupe_plane").setAttribute("class","actif");
					document.getElementById("jpcoffe").setAttribute("visible", "true");
					document.getElementById("main_cuillere").setAttribute("visible", "true");
				}
			}