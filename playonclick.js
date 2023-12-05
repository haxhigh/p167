AFRAME.registerComponent('playonclick', {
    schema: {
        isplaying:{type:"boolean",default:false}
    },

    init: function () {
      this.videoEl = this.el.getAttribute("material").src
      this.onClick = this.onclick.bind(this)
    },
    play:function(){
        window.addEventListener("click",this.onclick)
    },
    onClick:function(){
        if(!this.videoEl){
            return
        }
        
        var isplaying = this.el.getAttribute("playonclick").isplaying
        this.el.object3D.visible = true

        if(!isplaying){
            this.el.setAttribute("playonclick",{
                isplaying:true
            })
        }else{
            this.el.setAttribute("playonclick",{
                isplaying:false
            })
            this.videoEl.pause()
        }
    }
   

});
