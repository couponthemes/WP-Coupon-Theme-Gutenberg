<?php

add_shortcode( 'wp_coupon_store_carousel', 'coupon_store_carousel' );

function coupon_store_carousel( $atts, $instance ) {
    $a = shortcode_atts( array(
        'stc_feature_store_only' => '',
        'stc_include' => '',
        'stc_exc_id' => '',
        'stc_item_nb' => '1',
        'stc_order_by' => '',
        'stc_order' => 'count',
        'stc_slide_speed' => '300',
        'stc_pagi_speed' => '300',
        'stc_num_item_visible' => '5',
        'stc_num_item_visible_tab' => '5',
        'stc_num_item_visible_mobile' => '2',
        'stc_auto_play' => 'true',
        'stc_stop_on_hover' => 'true'
    ), $atts );
    ob_start();
    $stc_feature_store_only = $a['stc_feature_store_only'];
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


    <div class="owl-carousel owl-theme">
        <div class="item">
            <h4>1</h4>
        </div>
        <div class="item">
            <h4>2</h4>
        </div>
        <div class="item">
            <h4>3</h4>
        </div>
        <div class="item">
            <h4>4</h4>
        </div>
        <div class="item">
            <h4>5</h4>
        </div>
        <div class="item">
            <h4>6</h4>
        </div>
        <div class="item">
            <h4>7</h4>
        </div>
        <div class="item">
            <h4>8</h4>
        </div>
        <div class="item">
            <h4>9</h4>
        </div>
        <div class="item">
            <h4>10</h4>
        </div>
        <div class="item">
            <h4>11</h4>
        </div>
        <div class="item">
            <h4>12</h4>
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
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 1000,
                    autoplayHoverPause: true,
                    responsive:{
                        0:{
                            items: 1
                        },
                        768:{
                            items: 2
                        },
                        1199:{
                            items: 4
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

