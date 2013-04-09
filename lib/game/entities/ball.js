ig.module('game.entities.ball')
.requires('impact.entity')
.defines(function() {

    EntityBall = ig.Entity.extend({

        size: { x: 16, y: 16 },
        speed: 100,
        bounciness: 1,
        animSheet: new ig.AnimationSheet('media/ball.png', 16, 16),

        init: function(x, y, settings) {
            this.parent(x, y, settings);

            // Give the entity its appearance.
            this.addAnim('default', 1, [0]);

            // Set speed as the max velocity.
            this.maxVel.x = this.maxVel.y = this.speed;

            // Generate a random angle between -180 and 180 degrees, in radians.
            this.angle = (Math.ceil(Math.random()*360) - 180) * (Math.PI/180);
        },

        update: function() {

            this.setAccelByAngle(this.angle, this.speed);

            this.parent();
        },

        setVelocityByAngle: function(angle, velocity) {
            var slope = Math.tan(angle);
            var x_factor = (Math.abs(angle) < 1.57 ? 1 : -1); // 1.57 rads ~~ 90 degrees
            var y_factor = (angle > 0 ? 1 : -1);
            var rise = (Math.abs(slope) / (1 + Math.abs(slope)));
            var run = (1 / (1 + Math.abs(slope)));
            this.vel.y = y_factor * velocity * rise;
            this.vel.x = x_factor * velocity * run;
        },

        setAccelByAngle: function(angle, accel) {
            var slope = Math.tan(angle);
            var x_factor = (Math.abs(angle) < 1.57 ? 1 : -1); // 1.57 rads ~~ 90 degrees
            var y_factor = (angle > 0 ? 1 : -1);
            var rise = (Math.abs(slope) / (1 + Math.abs(slope)));
            var run = (1 / (1 + Math.abs(slope)));
            this.accel.y = y_factor * accel * rise;
            this.accel.x = x_factor * accel * run;
        }

    });

});