// JavaScript source code
		AFRAME.registerComponent('animation_playpause',
		{ 
			init: function()
			{
				var menu_back = document.getElementById("Bouton_Back_Avril_3");
				var lunettes_3D = document.getElementById("hitbox_lunettes3D");
				console.log(lunettes_3D);

				menu_back.addEventListener("click",(e)=>{
				document.getElementById("tine_swim").setAttribute("animation-mixer", "timeScale", "0");
				document.getElementById("tine_sit").setAttribute("animation-mixer", "timeScale", "0");
				document.getElementById("tine_dance").setAttribute("animation-mixer", "timeScale", "0");
				})

				lunettes_3D.addEventListener("click",(e)=>{
				document.getElementById("tine_swim").setAttribute("animation-mixer", "timeScale", "1");
				document.getElementById("tine_sit").setAttribute("animation-mixer", "timeScale", "1");
				document.getElementById("tine_dance").setAttribute("animation-mixer", "timeScale", "1");
				})
			}

		});