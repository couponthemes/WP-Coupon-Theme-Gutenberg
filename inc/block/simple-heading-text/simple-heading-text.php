<?php
defined( 'ABSPATH' ) || exit;

function gutenberg_slider() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type( __DIR__ );

}
add_action( 'init', 'gutenberg_slider' );
