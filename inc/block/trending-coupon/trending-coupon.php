<?php

add_shortcode( 'wp_coupon', 'coupon_func' );

function coupon_func( $atts, $content = null ) {
    $a = shortcode_atts( array(
        'coupon_nb' => '3',
        'coupon_excerpt' => '30',
        'coupon_excerpt_hide_img' => '15',
        'box_layout' => 'full',
        'paging' => '0',
        'exp_coupon' => '1',
        'latest_coupon_tab_hide' => '0',
        'popupar_tab' => '1',
        'ending_tab' => '1'
    ), $atts );
    ob_start();
    ?>

    <?php
        global $wp_query,  $post, $paged, $wp_rewrite;
        $paged =  wpcoupon_get_paged();
        $get_args = array();
        $number =  apply_filters( 'st_coupons_number' , get_option( 'posts_per_page' ) );
        if( $a['coupon_nb'] ) {
        $number = $a['coupon_nb'];
        } else {

        }

        $get_args[ 'posts_per_page' ] = $number;
        $get_args['hide_expired'] = $a['exp_coupon'];
        $posts =  wpcoupon_get_coupons( $get_args, $paged , $_max_page );
        $current_link = get_permalink();

        $tpl_name = null;
        if ( ! $a['box_layout'] || $a['box_layout'] == 'less' ) {
        $tpl_name = 'cat';
        }

        if ( isset( $a['coupon_excerpt'] ) ) {
        $GLOBALS['coupon_num_words'] =  $a['coupon_excerpt'] ;
        $GLOBALS['coupon_num_words_no_thumb'] = $a['coupon_excerpt_hide_img'] ;
        }

        $id = uniqid('coupons-');

        $num_tab = 0;
        if ( $a['popupar_tab'] ) {
        $num_tab ++;
        }

        if ( $a['ending_tab'] ) {
        $num_tab ++;
        }

        if ( ! $a['latest_coupon_tab_hide'] ) {
        $num_tab ++;
        }

        if ( $num_tab > 1 ) {
        ?>
        <section class="coupon-filter">
            <div data-target="#<?php echo esc_attr( $id ); ?>" class="filter-coupons-by-tab ui pointing fluid three item menu">
                <?php if ( ! $a['latest_coupon_tab_hide'] ) { ?>
                    <a data-filter=".latest-tab" class="item filter-nav active"><?php esc_html_e( 'Latest Coupons', 'wp-coupon' ); ?></a>
                <?php } ?>
                <?php if ( $a['popupar_tab'] ) { ?>
                    <a data-filter=".popular-tab" class="item filter-nav"><?php esc_html_e( 'Popular Coupons', 'wp-coupon' ); ?></a>
                <?php } ?>
                <?php if ( $a['ending_tab'] ){ ?>
                    <a data-filter=".ending-soon-tab" class="item filter-nav"><?php esc_html_e( 'Ending Soon', 'wp-coupon' ); ?></a>
                <?php } ?>
            </div>
        </section>
    <?php } ?>
        <div class="coupons-tab-contents" id="<?php echo esc_attr($id); ?>">
            <?php if ( ! $a['latest_coupon_tab_hide'] ) { ?>
                <div class="ajax-coupons coupon-tab-content latest-tab">
                    <?php if ( $posts ) { ?>
                        <div class="store-listings st-list-coupons">
                            <?php
                            foreach ($posts as $post) {
                                wpcoupon_setup_coupon($post, $current_link);
                                get_template_part('loop/loop-coupon', $tpl_name);
                            }
                            ?>
                        </div>
                    <?php } else { ?>
                        <div class="ui warning message">
                            <i class="close icon"></i>

                            <div class="header">
                                <?php esc_html_e('Oops! No coupons found', 'wp-coupon'); ?>
                            </div>
                            <p><?php esc_html_e('There is no coupons! Please comeback later.', 'wp-coupon'); ?></p>
                        </div>
                        <?php
                    }
                    if ($a['paging']) {
                        if ($_max_page > 1) { ?>
                            <div class="load-more wpb_content_element">
                                <a href="<?php echo next_posts($_max_page, false); ?>" class="ui button btn btn_primary btn_large" data-args="<?php echo esc_attr(json_encode($instance)); ?>"
                                   data-next-page="<?php echo($paged + 1); ?>" data-loading-text="<?php esc_attr_e('Loading...', 'wp-coupon'); ?>"><?php esc_html_e('Load More Coupons', 'wp-coupon'); ?> <i
                                            class="arrow circle down icon"></i></a>
                            </div>
                        <?php }
                    }
                    wp_reset_postdata();
                    ?>
                </div>
            <?php } ?>
            <?php
            if ( $a['popupar_tab'] ) {
                // Popular coupons
                $coupons = wpcoupon_get_popular_coupons($number);
                $_max_page = $wp_query->max_num_pages;
                ?>
                <div class="ajax-coupons coupon-tab-content popular-tab <?php echo ( $num_tab > 1 ) ? 'hide' : '' ?>">
                    <div class="store-listings st-list-coupons">
                        <?php
                        if ($coupons) {
                            foreach ($coupons as $post) {
                                wpcoupon_setup_coupon($post, $current_link);
                                get_template_part('loop/loop-coupon', $tpl_name);
                            }
                        } else {
                            ?>
                            <div class="ui warning message">
                                <i class="close icon"></i>

                                <div class="header">
                                    <?php esc_html_e('Oops! No coupons found', 'wp-coupon'); ?>
                                </div>
                                <p><?php esc_html_e('There is no coupons! Please comeback later.', 'wp-coupon'); ?></p>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                    <?php

                    if ($a['paging']) {
                        if ($_max_page > 1) { ?>
                            <div class="load-more wpb_content_element">
                                <a href="<?php echo next_posts($_max_page, false); ?>" class="ui button btn btn_primary btn_large"
                                   data-doing="load_popular_coupons"
                                   data-args="<?php echo esc_attr(json_encode($instance)); ?>"
                                   data-next-page="<?php echo($paged + 1); ?>" data-loading-text="<?php esc_attr_e('Loading...', 'wp-coupon'); ?>"><?php esc_html_e('Load More Coupons', 'wp-coupon'); ?>
                                    <i class="arrow circle down icon"></i></a>
                            </div>
                        <?php }
                    }

                    wp_reset_postdata();
                    ?>
                </div>
                <?php
            }

            if ( $a['ending_tab'] ){
                // end ding soon
                $coupons  = wpcoupon_get_ending_soon_coupons( apply_filters( 'wpcoupon_ending_soon_coupons_day_left', 3 ), $number );
                $_max_page =  $wp_query->max_num_pages;
                ?>
                <div class="ajax-coupons coupon-tab-content ending-soon-tab <?php echo ( $num_tab > 1 ) ? 'hide' : '' ?>">
                    <div class="store-listings st-list-coupons">
                        <?php
                        if ( $coupons ) {
                            foreach ($coupons as $post) {
                                wpcoupon_setup_coupon($post, $current_link);
                                get_template_part('loop/loop-coupon', $tpl_name);
                            }
                        } else {
                            ?>
                            <div class="ui warning message">
                                <i class="close icon"></i>
                                <div class="header">
                                    <?php esc_html_e( 'Oops! No coupons found', 'wp-coupon' ); ?>
                                </div>
                                <p><?php esc_html_e( 'There is no coupons ! Please comeback later.', 'wp-coupon' ); ?></p>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                    <?php

                    if ( $a['paging'] ) {
                        if ($_max_page > 1) { ?>
                            <div class="load-more wpb_content_element">
                                <a href="<?php echo next_posts($_max_page, false); ?>" class="ui button btn btn_primary btn_large"
                                   data-doing="load_ending_soon_coupons"
                                   data-args="<?php echo esc_attr(json_encode($instance)); ?>"
                                   data-next-page="<?php echo($paged + 1); ?>" data-loading-text="<?php esc_attr_e('Loading...', 'wp-coupon'); ?>"><?php esc_html_e('Load More Coupons', 'wp-coupon'); ?>
                                    <i class="arrow circle down icon"></i>
                                </a>
                            </div>
                        <?php }
                    }

                    wp_reset_postdata();
                    ?>
                </div>
                <?php
            }
            ?>
        </div>
    <?php

    return ob_get_clean();

}
?>

