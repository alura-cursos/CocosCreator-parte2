cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
    },
    
    update : function(){
        
    },
    
    onCollisionEnter:function(outro){
        if(outro.node.group == "inimigo"){

            outro.node.destroy();
        }
        this.node.destroy();
    }

});
