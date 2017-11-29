cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
        _movimentacao : cc.Component,
       
    },

    onLoad: function () {
        this._movimentacao = this.getComponent("Movimentacao");
    },

    update: function (dt) {
        let direcao = this.alvo.position.sub(this.node.position);
        this._movimentacao.setDirecao(direcao);
        
    },
});
