pc.script.create("gameOver", function (context) {

    const MULT = 25;
    const MAX_TIME = 2;

    var gameOverScript = function (entity) {
        this.entity = entity;


    };

    gameOverScript.prototype = {
        initialize: function () {
            this.entity.script.font_renderer.on('click', this.onTouch, this);
        },

        onTouch: function () {
            context.root.findByName('tank').script.tank.reset();
        },

        update: function (dt) {}
    }

    return gameOverScript;

});
