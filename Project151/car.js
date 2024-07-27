AFRAME.registerComponent("car", {
    init : function() {
        const rotation ={x:0 , y:270 , z:0}
        this.el.setAttribute("rotation", rotation)
    }
})