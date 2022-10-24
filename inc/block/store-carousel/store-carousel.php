<?php

add_shortcode( 'wp_coupon_store_carousel', 'coupon_store_carousel' );

function coupon_store_carousel( $atts, $instance ) {
    $a = shortcode_atts( array(
        'stc_include' => '',
        'stc_exc_id' => '',
        'stc_item_nb' => '',
        'stc_order_by' => '',
        'stc_order' => 'count',
        'stc_slide_speed' => '300',
        'stc_pagi_speed' => '300',
        'stc_num_item_visible' => '4',
        'stc_num_item_visible_tab' => '2',
        'stc_num_item_visible_mobile' => '1',
        'stc_auto_play' => 'true',
        'stc_stop_on_hover' => 'true'
    ), $atts );
    ob_start();
    $stc_include = $a['stc_include'];
    $stc_exc_id = $a['stc_exc_id'];
    $stc_item_nb = $a['stc_item_nb'];
    $stc_order_by = $a['stc_order_by'];
    $stc_order = $a['stc_order'];
    $stc_slide_speed = $a['stc_slide_speed'];
    $stc_pagi_speed = $a['stc_pagi_speed'];
    $stc_num_item_visible = $a['stc_num_item_visible'];
    $stc_num_item_visible_tab = $a['stc_num_item_visible_tab'];
    $stc_num_item_visible_mobile = $a['stc_num_item_visible_mobile'];
    $stc_auto_play = $a['stc_auto_play'];
    $stc_stop_on_hover = $a['stc_stop_on_hover'];
    ?>
    <?php
    $tax_args = array(
    'orderby'                => $stc_order_by,
    'order'                  => $stc_order,
    'hide_empty'             => false,
    'include'                => $stc_include,
    'exclude'                => $stc_exc_id,
    'exclude_tree'           => array(),
    'number'                 => $stc_item_nb,
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
    <div class="shadow-box popular-stores stores-thumbs">
        <div class="st-carousel owl-carousel owl-theme">
            <?php
                foreach ( $stores as $store ) {
                wpcoupon_setup_store( $store );
            ?>
                <div class="column">
                    <div class="store-thumb">
                        <a href="<?php echo  wpcoupon_store()->get_url(); ?>">
                            <?php
                            echo wpcoupon_store()->get_thumbnail( 'wpcoupon_small_thumb' );
                            ?>
                        </a>
                    </div>
                    <div class="store-name">
                        <?php
                        $store_url =  wpcoupon_store()->get_home_url();
                        $term_url = wpcoupon_store()->get_url();
                        if ( $store_url && $term_url != $store_url ) {

                            $data = parse_url( $store_url );
                            if (is_array($data)) {
                                $url = isset($data['host']) ? $data['host'] : '';
                                if (!$url) {
                                    $url = isset($data['path']) ? $data['path'] : '';
                                }

                                if ($url != '') {
                                    $url = str_replace('www.', '', strtolower($url));
                                }

                            } else {
                                $url = wpcoupon_store()->get_display_name();
                            }
                        } else {
                            $url =  $url = wpcoupon_store()->get_display_name();
                        }

                        ?>
                        <a href="<?php echo esc_url( $term_url ) ; ?>"><?php echo esc_html( $url ); ?></a>

                    </div>
                </div>
            <?php } ?>
            </div>
        </div>
    </div>
    <?php
    $url = get_template_directory_uri().'/inc/widgets/';
    wp_enqueue_script( 'owl.carousel', $url.'assets/js/owl.carousel.js', array(), false, true );
    wp_enqueue_style( 'owl.carousel.css', $url . 'assets/css/owl.carousel.min.css', array(), false, true );
    wp_enqueue_style( 'owl.theme.default.min', $url . 'assets/css/owl.theme.default.min.css', array(), false, true );
    ?>
    <script>
        (function($){
            $(document).ready(function() {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    items: 4,
                    loop: true,
                    nav:true,
                    dots: true,
                    smartSpeed : <?php echo esc_attr($stc_slide_speed);?>,
                    navSpeed : <?php echo esc_attr($stc_pagi_speed);?>,
                    margin: 10,
                    autoplay: <?php echo esc_attr($stc_auto_play);?>,
                    autoplayTimeout: 1000,
                    autoplayHoverPause: <?php echo esc_attr($stc_stop_on_hover);?>,
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items: <?php echo esc_attr($stc_num_item_visible_mobile);?>
                        },
                        768:{
                            items: <?php echo esc_attr($stc_num_item_visible_tab);?>
                        },
                        1199:{
                            items: <?php echo esc_attr($stc_num_item_visible);?>
                        }
                    },
                });
            })
        })(jQuery);
    </script>

<?php
    return ob_get_clean();
}
?>

