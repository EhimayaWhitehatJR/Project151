AFRAME.registerComponent("base", {
    schema:{
        radius: {type: "number", default : 55 },
        height: {type: "number", default: 3}
    },

    init : function() {
        this.el.setAttribute("geometry", {
            primitive : "cylinder",
            radius : this.data.radius ,
            height: this.data.height
        });
        this.el.setAttribute("material", {
            color: "#116C6E"
        })
        this.el.setAttribute("position",{
            x : 0,
            y: -22,
            z: -70
        })
    }
})