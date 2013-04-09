ig.module('game.entities.square')
.requires('impact.entity')
.defines(function() {

    EntitySquare = ig.Entity.extend({

        size: { x: 16, y: 16 },
        speed: 200,
        bounciness: 1,
        minBounceVelocity: 0,
        collides: ig.Entity.COLLIDES.ACTIVE,
        animSheet: new ig.AnimationSheet('media/tilesheet.png', 16, 16),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            // Give the entity its appearance.
            this.addAnim('default', 1, [0]);

            // Set speed as the max velocity.
            this.maxVel.x = this.maxVel.y = this.speed;

            // Generate a random angle between -180 and 180 degrees, in radians.
            this.angle = (Math.ceil(Math.random()*360) - 180) * (Math.PI/180);

            // Set initial velocity.
            this.setVelocityByAngle(this.angle, this.speed);
        },

        setVelocityByAngle: function(angle, velocity) {
            this.vel.x = Math.cos(angle) * velocity;
            this.vel.y = Math.sin(angle) * velocity;
        }

    });

});