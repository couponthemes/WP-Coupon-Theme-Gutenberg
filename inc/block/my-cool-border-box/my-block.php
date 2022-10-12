<?php
//function my_load_script(){
//    wp_enqueue_script( 'my-block-js',
//        get_template_directory_uri() . '/inc/block/my-cool-border-box/my-block.js',
//        array( 'jquery', 'wp-blocks', 'wp-i18n', 'wp-editor' ),
//        true );
//}
//add_action( 'wp_enqueue_scripts', 'my_load_script' );


function my_load_script() {

    $blockPath = '/inc/block/my-cool-border-box/my-block.js';

    // Enqueue the block index.js file
    wp_enqueue_script(
        'my-block', // unique handle
        get_template_directory_uri() . $blockPath,
        [ 'wp-blocks', 'wp-element', 'wp-i18n' ], // required dependencies for blocks
        filemtime( get_template_directory() . $blockPath )
    );

}
add_action( 'enqueue_block_editor_assets', 'my_load_script' );
