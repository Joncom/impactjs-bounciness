ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'game.levels.demo'
)
.defines(function(){

MyGame = ig.Game.extend({

    // Load a font.
    font: new ig.Font( 'media/04b03.font.png' ),

    init: function() {

        // Load demo level.
        this.loadLevel(LevelDemo);
    },

    draw: function() {

        this.parent();

        var x = ig.system.width/2;
        var y = ig.system.height - this.font.height - 2;
        this.font.draw( 'It Works!.', x, y, ig.Font.ALIGN.CENTER );
    }
});

ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
