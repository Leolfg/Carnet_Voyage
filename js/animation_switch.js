// JavaScript source code
		AFRAME.registerComponent('animation_switch',
		{ 
			init: function( )
			{
				var entity = this.el;

				entity.addEventListener("mouseenter",(e)=>{
				entity.children[0].setAttribute("animation-mixer", "clip", "ANIM_1");
			})

			{
			entity.addEventListener("mouseleave", (e)=> {
			entity.children[0].setAttribute("animation-mixer", "clip", "TPOSE") 
			})
			}
			}

		});