// JavaScript source code
			 var previousAngleX = 0;
			 var previousAngleY = 0;
			 var orientation_left = {_x: 0,_y: 0,_z:0}; // Orientation when looking left
			 var orientation_right = {_x: 0,_y: 180,_z: 0}; // Orientation when looking right

			AFRAME.registerComponent('rotation-reader', {

			  rotatePlaneClockwise : function(net) {
				net.setAttribute('material','src','#avion_2_tex');
			  },
			  rotatePlaneAntiClockwise : function(net) {
				net.setAttribute('material','src','#avion_tex');
			  },
			  tick: function () {

				var net=document.getElementById("avion");
				var deltaAngleX=this.el.object3D.rotation._x - previousAngleX;
				var deltaAngleY=this.el.object3D.rotation._y - previousAngleY;

				if(this.el.object3D.rotation._y!=previousAngleY){

					if(deltaAngleY<0){
						this.rotatePlaneClockwise(net);
					}
					else if(deltaAngleY>0) {
						this.rotatePlaneAntiClockwise(net);
					}
				}

				previousAngleX = this.el.object3D.rotation._x;
				previousAngleY = this.el.object3D.rotation._y;
			  }
			});