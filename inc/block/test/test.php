<?php
/*
 Plugin Name: Test Block
 Description: Test Block is the block based widget
 Author: Couponthemes
 Version: 1.0.0
 */

function gutenberg_examples_01_register_block() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'gutenberg_examples_01_register_block' );

?>