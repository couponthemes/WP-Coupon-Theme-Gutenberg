<?php

add_shortcode( 'wp_coupon_store_carousel', 'coupon_store_carousel' );

function coupon_store_carousel( $atts ) {
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
    ?>
    <div>
        <h4>WP Coupon Store Carousel</h4>
        <div class="input-row">
            <p>
                <input type="checkbox" name="stc_feature_store_only" id="stc_feature_store_only" class="stc_feature_store_only" value="" onChange="" />
            </p>
            <p>
                <label>
                    <strong>Featured stores only.:</strong>
                </label>
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Include:</strong>
                </label>
            </p>
            <p>
                <input type="text" name="stc_include" id="stc_include" class="stc_include" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Exclude:</strong>
                </label>
            </p>
            <p>
                <input type="text" name="stc_exc_id" id="stc_exc_id" class="stc_exc_id" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>How many stores to display ?</strong>
                </label>
            </p>
            <p>
                <input type="number" name="stc_item_nb" id="stc_item_nb" class="stc_item_nb" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Order by:</strong>
                </label>
            </p>
            <p>
                <select id="stc_order_by" class="stc_order_by" value="" onchange="">
                    <option value="none">Default</option>
                    <option value="count">Number of Coupons</option>
                    <option value="name">Title</option>
                    <option value="id">Preserve Store ID order given in the inlcude IDs</option>
                </select>
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Order:</strong>
                </label>
            </p>
            <p>
                <select id="stc_order" class="stc_order" value="" onchange="">
                    <option value="desc">DESC</option>
                    <option value="asc">ASC</option>
                </select>
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Slide speed (millisecond):</strong>
                </label>
            </p>
            <p>
                <input type="number" name="stc_slide_speed" id="stc_slide_speed" class="stc_slide_speed" value={props.attributes.ct_depth} onChange={updateMail_chimp_action} />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Pagination speed (millisecond):</strong>
                </label>
            </p>
            <p>
                <input type="number" name="stc_pagi_speed" id="stc_pagi_speed" class="stc_pagi_speed" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Number items visible:</strong>
                </label>
            </p>
            <p>
                <input type="number" name="stc_num_item_visible" id="stc_num_item_visible" class="stc_num_item_visible" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Number items visible on tablet:</strong>
                </label>
            </p>
            <p>
                <input type="number" name="stc_num_item_visible_tab" id="stc_num_item_visible_tab" class="stc_num_item_visible_tab" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Number items visible on mobile:</strong>
                </label>
            </p>
            <p>
                <input type="text" name="stc_num_item_visible_mobile" id="stc_num_item_visible_mobile" class="stc_num_item_visible_mobile" value="" onChange="" />
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Auto play:</strong>
                </label>
            </p>
            <p>
                <select id="stc_auto_play" class="stc_auto_play" value="" onChange="">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </p>
        </div>
        <div class="input-row">
            <p>
                <label>
                    <strong>Stop on hover:</strong>
                </label>
            </p>
            <p>
                <select id="stc_stop_on_hover" class="stc_stop_on_hover" value="" onChange="">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </p>
        </div>
    </div>

    <?php
    return ob_get_clean();
}
?>

