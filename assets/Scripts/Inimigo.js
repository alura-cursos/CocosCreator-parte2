cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
        _movimentacao : cc.Component,
        _controleAnimacao : cc.Component,
 
        
       
    },

    onLoad: function () {
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
       
    },

    update: function (dt) {
        let direcao = this.alvo.position.sub(this.node.position);
        let distancia = direcao.mag();
        this._controleAnimacao.mudaAnimacao(direcao, "Andar");
        this._movimentacao.setDirecao(direcao);
       
    },
});
