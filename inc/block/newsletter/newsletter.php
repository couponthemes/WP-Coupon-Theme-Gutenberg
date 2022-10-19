<?php

add_shortcode( 'wp_coupon_newsletter', 'newsletter_func' );

function newsletter_func( $atts ) {
    $a = shortcode_atts( array(
        'mail_chimp_action' => '3',
        'before_form' => '',
        'after_form' => '',
        'facebook_url' => '#',
        'twitter_url' => '#',
        'linkedin_url' => '#',
        'google_url' => '#',
        'flicker_url' => '#',
        'youtube_url' => '#',
        'instagram_url' => '#',
        'pinterest_url' => '#',
        'social_link_target' => '_blank'
    ), $atts );
    ob_start();
    ?>
<?php
    $mail_chimp_action = $a['mail_chimp_action'];
    $before_form = $a['before_form'];
    $after_form = $a['after_form'];
    $facebook_url = $a['facebook_url'];
    $twitter_url = $a['twitter_url'];
    $linkedin_url = $a['linkedin_url'];
    $google_url = $a['google_url'];
    $flicker_url = $a['flicker_url'];
    $youtube_url = $a['youtube_url'];
    $instagram_url = $a['instagram_url'];
    $pinterest_url = $a['pinterest_url'];
    $social_link_target = $a['social_link_target'];


    $form_id = uniqid( 'newsletter-box' );
    ?>
    <div class="newsletter-box-wrapper shadow-box">
        <form id="<?php echo $form_id; ?>" method="post" action="<?php echo esc_attr( $mail_chimp_action ) ?>" target="_blank">

            <?php if ( $before_form != '' ) { ?>
                <div class="newsletter-text before-form"><?php echo balanceTags( $before_form ); ?></div>
            <?php } ?>

            <div class="ui action left icon input">
                <input class="submit-input" type="email" required="required" name="EMAIL" placeholder="<?php esc_attr_e( 'Your email', 'wp-coupon' ); ?>">
                <i class="mail outline icon"></i>
                <div class="submit-btn ui button" onclick="document.getElementById('<?php echo $form_id; ?>').submit();"><?php esc_html_e( 'Subscribe', 'wp-coupon' ); ?></div>
            </div>
            <div class="clear"></div>

            <?php if ( $after_form != '' ) { ?>
                <div class="newsletter-text after-form"><?php echo balanceTags( $after_form ); ?></div>
            <?php } ?>

            <div class="sidebar-social">
                <?php if ( $facebook_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $facebook_url ); ?>" class="ui circular icon button"><i class="facebook icon"></i></a>
                <?php } ?>

                <?php if ( $twitter_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $twitter_url ); ?>" class="ui circular icon button"><i class="twitter icon"></i></a>
                <?php } ?>

                <?php if ( $linkedin_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $instance['linkedin'] ); ?>" class="ui circular icon button"><i class="linkedin icon"></i></a>
                <?php } ?>

                <?php if ( $google_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $google_url ); ?>" class="ui circular icon button"><i class="google plus icon"></i></a>
                <?php } ?>

                <?php if ( $flicker_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $flicker_url ); ?>" class="ui circular icon button"><i class="flickr icon"></i></a>
                <?php } ?>

                <?php if ( $youtube_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $youtube_url ); ?>" class="ui circular icon button"><i class="youtube icon"></i></a>
                <?php } ?>

                <?php if ( $instagram_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $instagram_url ); ?>" class="ui circular icon button"><i class="instagram icon"></i></a>
                <?php } ?>
                <?php if ( $pinterest_url ) { ?>
                    <a target="<?php echo esc_attr( $social_link_target ); ?>" href="<?php echo esc_attr( $pinterest_url ); ?>" class="ui circular icon button"><i class="pinterest icon"></i></a>
                <?php } ?>
            </div>
        </form>
    </div>
    <?php
    return ob_get_clean();
}
?>
