ig.module('game.entities.ball')
.requires('impact.entity')
.defines(function() {

    EntityBall = ig.Entity.extend({

        size: { x: 16, y: 16 },
        speed: 100,
        animSheet: new ig.AnimationSheet('media/ball.png', 16, 16),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            // Give the entity its appearance.
            this.addAnim('default', 1, [0]);

            // Set speed as the max velocity.
            this.maxVel.x = this.maxVel.y = this.speed;
        },

        update: function() {
            this.parent();
        }

    });

});