( function ( blocks, element ) {
    var el = element.createElement;

    blocks.registerBlockType( 'gutenberg-examples/test', {
        edit: function () {
            return el( 'p', {}, 'Hello World (from the editor).' );
        },
        save: function () {
            return el( 'p', {}, 'Hello World (from the save).' );
        },
    } );

})( window.wp.blocks, window.wp.element );