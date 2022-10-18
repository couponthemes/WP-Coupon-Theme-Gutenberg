<?php

add_shortcode( 'wp_coupon_category', 'coupon_category_func' );

function coupon_category_func( $atts ) {
    $a = shortcode_atts( array(
        'ct_depth' => '1',
        'ct_orderby' => 'count',
        'ct_order' => 'desc',
        'ct_number' => '6',
        'ct_show_count' => '',
        'ct_item_per_row' => '3'
    ), $atts );
    ob_start();

    $ct_depth = $a['ct_depth'];
    $ct_orderby = $a['ct_orderby'];
    $ct_order = $a['ct_order'];
    $ct_number = $a['ct_number'];
    $ct_show_count = $a['ct_show_count'];
    $ct_item_per_row = $a['ct_item_per_row'];

    $_args = array(
    'show_option_all'    => '',
    'orderby'            => $ct_orderby,
    'order'              => $ct_order,
    'style'              => 'list',
    'show_count'         => $ct_show_count,
    'hide_empty'         => 0,
    'use_desc_for_title' => 1,
    'child_of'           => 0,
    'feed'               => '',
    'feed_type'          => '',
    'feed_image'         => '',
    'exclude'            => '',
    'exclude_tree'       => '',
    'include'            => '',
    'hierarchical'       => 1,
    'title_li'           => false,
    'show_option_none'   => false,
    'number'             => $ct_number,
    'echo'               => 1,
    'depth'              => $ct_depth,
    'current_category'   => 0,
    'pad_counts'         => 0,
    'taxonomy'           => 'coupon_category',
    'walker'             =>  new WPCoupon_Walker_Category()
    );

    $_args =  wp_parse_args( $_args );

    echo '<div class="'.apply_filters( 'st_categories_class_name' , 'list-categories shadow-box' ).'">';
        echo '<div class="ui grid stackable">';
            echo '<ul class="'.wpcoupon_number_to_html_class($ct_item_per_row ).' column row">';
                wp_list_categories( $_args );
                echo '</ul>';
            echo '</div>';
        echo '</div>';
    echo '</div>';
    return ob_get_clean();
}
?>
