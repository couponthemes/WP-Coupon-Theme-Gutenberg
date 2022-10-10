<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @package carousel-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue block editor JavaScript and CSS.
 */
function carousel_block_editor_assets() {
	// Register block editor script for backend.

    wp_enqueue_script( 'carousel-block-editor',
        get_stylesheet_directory_uri() . '/inc/block/carousel-block/dist/blocks.build.js',
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
        array( 'jquery' ) );

	// Register block editor styles for backend.


    wp_enqueue_style( 'carousel-block-editor',
        get_template_directory_uri() . '/inc/block/carousel-block/dist/blocks.editor.build.css',
        [ 'wp-edit-blocks' ],
        true );
}

add_action( 'enqueue_block_editor_assets', 'carousel_block_editor_assets' );

/**
 * Enqueue block styles for frontend and editor.
 */
function carousel_block_assets() {
	if ( ! is_admin() ) {
        wp_enqueue_style( 'carousel-block-slick',
            get_template_directory_uri() . '/inc/block/carousel-block/dist/assets/vendor/slick/slick.min.css',
            [],
            false
        );
	}

	wp_enqueue_style(
		'carousel-block',
        get_template_directory_uri() . '/inc/block/carousel-block/dist/blocks.style.build.css',
        [],
        true
    );
}

add_action( 'enqueue_block_assets', 'carousel_block_assets' );
