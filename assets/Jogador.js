cc.Class({
    extends: cc.Component,

    properties: {
        direcao : cc.Vec2,
        _movimentacao : cc.Component,
        
    },


    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
        this._movimentacao = this.getComponent("Movimentacao");
    },

    update: function (deltaTime) {
       this._movimentacao.setDirecao(this.direcao);
    },

    teclaPressionada : function(event){

        if(event.keyCode == cc.KEY.a){
            this.direcao.x = -1;
        }
        if(event.keyCode == cc.KEY.d){
            this.direcao.x = 1;
        }

        if(event.keyCode == cc.KEY.w){
            this.direcao.y = 1;
        }
        if(event.keyCode == cc.KEY.s){
            this.direcao.y = -1;
        }
    },


    teclaSolta : function(event){
        if(event.keyCode == cc.KEY.a){
            this.direcao.x = 0;
        }
        if(event.keyCode == cc.KEY.d){
            this.direcao.x = 0;
        }

        if(event.keyCode == cc.KEY.w){
            this.direcao.y = 0;
        }
        if(event.keyCode == cc.KEY.s){
            this.direcao.y = 0;
        }
    }

});
