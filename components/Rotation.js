//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRoation < 0.1) {
          this.data.speedOfRoation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRoation > -0.1) {
          this.data.speedOfRoation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRoation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

//its is dedicated to mr.aravind


AFRAME.registerComponent("plane-rotation-readaravind", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscend:{type:"number", default:0}    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRoation=this.el.getAttribute("rotation")
      this.data.speedOfAscend=this.el.getAttribute("position")

      var planeRot=this.data.speedOfRoation
      var planePos=this.data.speedOfAscend
      if (e.key === "ArrowUp") {
      if(planeRot.z<20){
        planeRot.z+=0.5
        this.el.setAttribute("rotation", planeRot)
      }
      if(planePos.y<2){
        planePos.y+=0.02
        this.el.setAttribute("position", planePos)
      }
      }
      if (e.key === "ArrowDown") {
        if(planeRot.z>20){
          planeRot.z-=0.5
          this.el.setAttribute("rotation", planeRot)
        }
        if(planePos.y>-2){
          planePos.y-=0.02
          this.el.setAttribute("position", planePos)
        }
      }
    });
  }
  
});
