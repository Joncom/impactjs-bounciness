ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'game.levels.demo'
)
.defines(function(){

MyGame = ig.Game.extend({

    init: function() {

        // Load demo level.
        this.loadLevel(LevelDemo);
    }
});

ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
