<?php

add_shortcode( 'bartag', 'bartag_func' );

function bartag_func( $atts, $content = null ) {
    $a = shortcode_atts( array(
        'title' => 'something title',
        'content' => 'something else',
    ), $atts );
    ob_start();
    ?>

    <span class="<?php echo $a['title']; ?>"><?php echo $content; ?></span>

    <?php
    return ob_get_clean();
}
?>
<?php

    function my_load_script() {

    $blockPath = '/inc/block/trending-coupon/trending-coupon.js';

    // Enqueue the block index.js file
    wp_enqueue_script(
    'my-block', // unique handle
    get_template_directory_uri() . $blockPath,
    [ 'wp-blocks', 'wp-element', 'wp-i18n' ], // required dependencies for blocks
    filemtime( get_template_directory() . $blockPath )
    );

    }
    add_action( 'enqueue_block_editor_assets', 'my_load_script' );

?>

