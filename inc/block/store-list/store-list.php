<?php

add_shortcode( 'wp_coupon_store', 'coupon_store_func' );

function coupon_store_func( $atts ) {
    $a = shortcode_atts( array(
        'store_nb' => '3',
        'store_inc_id' => '',
        'store_exc_id' => '',
        'store_per_row' => '6',
        'store_oder_by' => 'random',
        'store_oder' => 'DESC'
    ), $atts );
    ob_start();
    ?>
    <?php

    $store_nb = $a['store_nb'];
    $store_inc_id = $a['store_inc_id'];
    $store_exc_id = $a['store_exc_id'];
    $store_per_row = $a['store_per_row'];
    $store_oder_by = $a['store_oder_by'];
    $store_oder = $a['store_oder'];


    $store_inc_id = explode( ',', $store_inc_id );
    $store_exc_id = explode( ',', $store_exc_id );

    $store_inc_id = array_map( 'absint', $store_inc_id );
    $store_inc_id = array_filter( $store_inc_id );

    $store_exc_id = array_map( 'absint', $store_exc_id );
    $store_exc_id = array_filter( $store_exc_id );


    $tax_args = array(
    'orderby'                => $store_oder_by,
    'order'                  => $store_oder,
    'hide_empty'             => false,
    'include'                => $store_inc_id,
    'exclude'                => $store_exc_id,
    'exclude_tree'           => array(),
    'number'                 => $store_nb,
    'hierarchical'           => false,
    'pad_counts'             => false,
    'child_of'               => 0,
    'childless'              => false,
    'cache_domain'           => 'core',
    'taxonomy'               => 'coupon_store',
    'update_term_meta_cache' => true,
    );

    $stores = get_terms( $tax_args );
    global $post;
    ?>
    <div class="widget-content shadow-box">
        <div class="ui <?php echo wpcoupon_number_to_html_class( $store_per_row ); ?> column grid">
            <?php
            foreach ( $stores as $store ) {
                wpcoupon_setup_store( $store );
                ?>
                <div class="column">
                    <div class="store-thumb">
                        <a class="ui image middle aligned" href="<?php echo wpcoupon_store()->get_url(); ?>">
                            <?php echo wpcoupon_store()->get_thumbnail() ?>
                        </a>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>



    <?php
    return ob_get_clean();
}
?>
<?php

function my_load_script() {

    $blockPath = '/inc/block/store-list/store-list.js';

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

