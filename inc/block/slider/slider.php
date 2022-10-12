<?php
function slider_script() {

    $blockPath = '/inc/block/slider/slider.js';

    // Enqueue the block index.js file
    wp_enqueue_script(
        'slider', // unique handle
        get_template_directory_uri() . $blockPath,
        [ 'wp-blocks', 'wp-element', 'wp-i18n' ], // required dependencies for blocks
        filemtime( get_template_directory() . $blockPath )
    );

}
add_action( 'enqueue_block_editor_assets', 'slider_script' );
