pc.script.create("health", function (context) {

    const defaultValue = 3;

    var healthScript = function (entity) {
        this.entity = entity;
        //        this.health = context.root.findByName('health');
        this.value = defaultValue;
    };

    healthScript.prototype = {
        initialize: function () {
            for (var i = 0; i < this.value; i++) {
                var healthSprite = new pc.fw.Entity();
                healthSprite.setName('healthSprite' + i);

                var healthSpriteScript = {
                    name: 'healthSpriteScript',
                    url: 'scripts/sprite.js',
                    attributes: [{
                        name: 'textureAsset',
                        value: 'tank_icon.png'
                    }, {
                        name: 'x',
                        value: 5 + (64 + 5) * i
                    }, {
                        name: 'y',
                        value: -50
                    }, {
                        name: 'width',
                        value: 64
                    }, {
                        name: 'height',
                        value: 64
                    }, {
                        name: 'anchor',
                        value: 0
                    }, {
                        name: 'pivot',
                        value: 0
                    }, {
                        name: 'tint',
                        type: 'rgba',
                        value: [1, 1, 1, 1]
                    }, {
                        name: 'maxResHeight',
                        value: 720
                    }, {
                        name: 'depth',
                        value: 1
                    }, {
                        name: 'uPercentage',
                        value: 1
                    }, {
                        name: 'vPercentage',
                        value: 1
                    }]
                }

                context.systems.script.addComponent(healthSprite, {
                    enabled: true,
                    scripts: [healthSpriteScript]
                });

                this.entity.addChild(healthSprite);
                //                context.root.addChild(healthSprite);

            }
        },

        update: function (dt) {},

        canDecrease: function (amount) {
            if (this.value - amount < 0) {
                return false;
            }
            return true;
        },

        decrease: function (amount) {
            if (amount < 1)
                amount = 1;
            for (var i = 0; i < amount; i++) {
                var name = 'healthSprite' + (this.value - i - 1);
//                console.log(context.root.findByName(name));
                var e = this.entity.findByName(name);

                e.enabled = false;
                e.destroy();

//                console.log(context.root.findByName(name));
                this.value--;
//                console.log();

            }
        },

        reset: function() {
            this.entity.getChildren().forEach(function (x) {
                x.enabled = false;
                x.destroy();
            });

            this.value = defaultValue;
            this.initialize();

        },

        die: function () {
            console.log("lol you're dead");
            //            var gameObjects = context.root.findByName('gameObjects');
            //            gameObjects.enabled = false;
            //            gameObjects.off();
            //            gameObjects.getChildren().forEach(function (x) {
            //                x.enabled = false;
            //            });


        }
    }

    return healthScript;

});
