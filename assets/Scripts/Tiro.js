cc.Class({
    extends: cc.Component,

    properties: {
      
    },

  
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
    },
    onCollisionEnter:function(outro){
        outro.node.destroy();
        this.node.destroy();
    }
   
});
