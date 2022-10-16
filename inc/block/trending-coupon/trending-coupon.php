<?php

add_shortcode( 'wp_coupon', 'coupon_func' );

function coupon_func( $atts, $content = null ) {
    $a = shortcode_atts( array(
        'item_count' => '3',
        'description_count' => '15',
    ), $atts );
    ob_start();
    ?>
    <div class="AllBlogs">
        <?php
        $args = array( 'post_type' => 'coupon', 'posts_per_page' => $a['item_count']);
        $loop = new WP_Query( $args );
        while ( $loop->have_posts() ) : $loop->the_post();
        ?>
        <?php
        $has_thumb = wpcoupon_maybe_show_coupon_thumb();
        ?>
        <div class="Blog1">
            <?php if ( $has_thumb ) { ?>
                <div class="store-thumb-link">
                    <?php wpcoupon_thumb( $has_thumb === 'save_value' ? true : false ); ?>
                </div>
            <?php } ?>
            <div class="BlogsTitle">
                <h3 class="coupon-title">
                    <?php edit_post_link('<i class="edit icon"></i>', '', '', wpcoupon_coupon()->ID ); ?>
                    <a title="<?php echo esc_attr( get_the_title( wpcoupon_coupon()->ID ) ) ?>"
                        <?php if ( ! wpcoupon_is_single_enable() ) { ?>
                            rel="nofollow"
                        <?php } ?>
                            class="coupon-link"
                            data-type="<?php echo wpcoupon_coupon()->get_type(); ?>"
                            data-coupon-id="<?php echo wpcoupon_coupon()->ID; ?>"
                            data-aff-url="<?php echo esc_attr( wpcoupon_coupon()->get_go_out_url() ); ?>"
                            data-code="<?php echo esc_attr( wpcoupon_coupon()->get_code() ); ?>"
                            href="<?php echo esc_attr( wpcoupon_coupon()->get_href() ); ?>"><?php echo get_the_title( wpcoupon_coupon()->ID ); ?></a></h3>
                <p>
                    <?php
                    $excerpt = get_the_excerpt();
                    $excerpt = substr( $excerpt , 0, $a['description_count']);
                    echo $excerpt;
                    ?>
                </p>
                <?php the_category('/'); ?>
            </div>
            <?php
            endwhile;
            ?>
        </div>
    </div>
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

