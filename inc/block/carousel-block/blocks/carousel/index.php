<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Returns the content of the block.
 *
 * @param array $attributes Block attributes.
 *
 * @param string $content Block save content.
 */
function render_block_cb_carousel( $attributes, $content ) {
	if ( ! is_admin() ) {
		wp_enqueue_script(
			'carousel-block-slick',
            get_template_directory_uri(). '/inc/block/carousel-block/dist/assets/vendor/slick/slick.min.js',
			[ 'jquery' ],
			true
		);

		wp_enqueue_script(
			'carousel-block-view',
            get_template_directory_uri() . '/inc/block/carousel-block/blocks/carousel/view.js',
			[ 'jquery', 'carousel-block-slick' ],
			true
		);
	}

	return $content;
}

/**
 * Register the block.
 */
function register_block_cb_carousel() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( __DIR__,
		array(
	  	'render_callback' => 'render_block_cb_carousel'
	  )
	);
}

add_action( 'init', 'register_block_cb_carousel' );
