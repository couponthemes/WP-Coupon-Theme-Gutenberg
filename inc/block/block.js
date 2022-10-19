/*alert("Hello! I am an alert box!!");*/

wp.blocks.registerBlockType('wp-coupon/storelist', {
    title: 'WPCoupon Stores',
    icon: 'store',
    category: 'widgets',
    attributes: {
        store_nb: {type: 'string'},
        store_inc_id: {type: 'string'},
        store_exc_id: {type: 'string'},
        store_per_row: {type: 'string'},
        store_oder_by: {
            type: 'string',
            default: 'name'
        },
        store_oder: {
            type: 'string',
            default: 'DESC'
        },
    },
    edit:function (props){
        function updateStore_nb(event){
            props.setAttributes({store_nb: event.target.value})
        }
        function updateStore_inc_id(event){
            props.setAttributes({store_inc_id: event.target.value})
        }
        function updateStore_exc_id(event){
            props.setAttributes({store_exc_id: event.target.value})
        }
        function updateStore_per_row(event){
            props.setAttributes({store_per_row: event.target.value})
        }
        function updateStore_oder_by(event){
            props.setAttributes({store_oder_by: event.target.value})
        }
        function updateStore_oder(event){
            props.setAttributes({store_oder: event.target.value})
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h4", null, "WP Coupon Store List"),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Number store to show:")
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "store_nb",
                    id: "store_nb",
                    class: "store_nb",
                    value: props.attributes.store_nb,
                    onChange: updateStore_nb
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    "Comma-separated of term ids to include:"
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "text",
                    name: "store_inc_id",
                    id: "store_inc_id",
                    class: "store_inc_id",
                    value: props.attributes.store_inc_id,
                    onChange: updateStore_inc_id
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    "Comma-separated of term ids to exclude:"
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "text",
                    name: "store_exc_id",
                    id: "store_exc_id",
                    class: "store_exc_id",
                    value: props.attributes.store_exc_id,
                    onChange: updateStore_exc_id
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Number item per row:")
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "store_per_row",
                    id: "store_per_row",
                    class: "store_per_row",
                    value: props.attributes.store_per_row,
                    onChange: updateStore_per_row
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Order by")
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "select",
                    {
                        id: "stor_oder_by",
                        class: "stor_oder_by",
                        value: props.attributes.store_oder_by,
                        onChange: updateStore_oder_by
                    },
                    wp.element.createElement(
                        "option",
                        {
                            value: "name"
                        },
                        "Name"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "count"
                        },
                        "Number Coupons"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "rand"
                        },
                        "Random"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Order")
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "select",
                    {
                        id: "stor_oder",
                        name: "stor_oder",
                        value: props.attributes.stor_oder,
                        onChange: updateStore_oder
                    },
                    wp.element.createElement(
                        "option",
                        {
                            value: "desc"
                        },
                        "DESC"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "asc"
                        },
                        "ASC"
                    )
                )
            )
        );
    },
    save:function (props){
        return wp.element.createElement(
             "div",
             null,
             wp.element.createElement("h2", null, props.attributes.block_title),
             wp.element.createElement(
                "p",
                null,
                '[wp_coupon_store store_nb="',
                props.attributes.store_nb,
                '" store_inc_id="',
                props.attributes.store_inc_id,
                '" store_exc_id="',
                props.attributes.store_exc_id,
                '" store_per_row="',
                props.attributes.store_per_row,
                '" store_oder_by="',
                props.attributes.store_oder_by,
                '" store_oder="',
                props.attributes.store_oder,
                '"]'
            )
        );
    }
});

wp.blocks.registerBlockType('wp-coupon/couponlist', {
    title: 'WPCoupon Coupons',
    icon: 'tag',
    category: 'widgets',
    attributes: {
        coupon_nb: {type: 'string'},
        coupon_excerpt: {type: 'string'},
        coupon_excerpt_hide_img: {type: 'string'},
        box_layout: {
            type: 'string',
            default: 'full'
        },
        paging: {
            type: 'string',
            default: 'no'
        },
        exp_coupon: {
            type: 'string',
            default: ''
        },
        latest_coupon_tab_hide: {
            type: 'string',
            default: ''
        },
        popupar_tab: {
            type: 'string',
            default: ''
        },
        ending_tab: {
            type: 'string',
            default: ''
        },
    },

    edit:function (props){

        function updateCoupon_nb(event){
            props.setAttributes({coupon_nb: event.target.value})
        }
        function updateCoupon_excerpt(event){
            props.setAttributes({coupon_excerpt: event.target.value})
        }
        function updateCoupon_excerpt_hide_img(event){
            props.setAttributes({coupon_excerpt_hide_img: event.target.value})
        }
        function updateBox_layout(event){
            props.setAttributes({box_layout: event.target.value})
        }
        function updatePaging(event){
            props.setAttributes({paging: event.target.value})
        }
        function updateExp_coupon(event){
            if (event.target.checked) {
                props.setAttributes({ exp_coupon: 'on' });
            } else {
                props.setAttributes({ exp_coupon: '' });
            }
        }
        function updateLatest_coupon_tab_hide(event){
            if (event.target.checked) {
                props.setAttributes({ latest_coupon_tab_hide: 'on' });
            } else {
                props.setAttributes({ latest_coupon_tab_hide: '' });
            }
        }
        function updatePopupar_tab(event){
            if (event.target.checked) {
                props.setAttributes({ popupar_tab: 'on' });
            } else {
                props.setAttributes({ popupar_tab: '' });
            }
        }
        function updateEnding_tab(event){
            if (event.target.checked) {
                props.setAttributes({ ending_tab: 'on' });
            } else {
                props.setAttributes({ ending_tab: '' });
            }
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h4", null, "WP Coupon List"),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement(
                        "strong",
                        null,
                        "Number coupons to show:"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "coupon_nb",
                    id: "coupon_nb",
                    class: "coupon_nb",
                    placeholder: "Enter the number of coupon amount in here.",
                    value: props.attributes.coupon_nb,
                    onChange: updateCoupon_nb
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Excerpt length:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "coupon_excerpt",
                    id: "coupon_excerpt",
                    class: "coupon_excerpt",
                    placeholder: "Enter the number of coupon excerpt in here.",
                    value: props.attributes.coupon_excerpt,
                    onChange: updateCoupon_excerpt
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement(
                        "strong",
                        null,
                        "Excerpt length if hide thumbnails:"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "coupon_excerpt_hide_img",
                    id: "coupon_excerpt_hide_img",
                    class: "coupon_excerpt_hide_img",
                    placeholder:
                        "Enter the number of coupon excerpt for when thumbnails is hide in here.",
                    value: props.attributes.coupon_excerpt_hide_img,
                    onChange: updateCoupon_excerpt_hide_img
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Box layout:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "select",
                    {
                        id: "box_layout",
                        class: "box_layout",
                        value: props.attributes.box_layout,
                        onChange: updateBox_layout
                    },
                    wp.element.createElement(
                        "option",
                        {
                            value: "less"
                        },
                        "Less"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "full"
                        },
                        "Full"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Show paging:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "select",
                    {
                        id: "paging",
                        name: "paging",
                        value: props.attributes.paging,
                        onChange: updatePaging
                    },
                    wp.element.createElement(
                        "option",
                        {
                            value: "no"
                        },
                        "No"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "yes"
                        },
                        "Yes"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "checkbox",
                    name: "exp_coupon",
                    id: "exp_coupon",
                    class: "exp_coupon",
                    // value: "",
                    checked: props.attributes.exp_coupon ? 'checked' : '',
                    onChange: updateExp_coupon
                }),
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement(
                        "strong",
                        null,
                        "Do not show expired coupons."
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "checkbox",
                    name: "latest_coupon_tab_hide",
                    id: "latest_coupon_tab_hide",
                    class: "latest_coupon_tab_hide",
                    // value: "",
                    checked: props.attributes.latest_coupon_tab_hide ? 'checked' : '',
                    onChange: updateLatest_coupon_tab_hide
                }),
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement(
                        "strong",
                        null,
                        "Hide latest coupons tab"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "checkbox",
                    name: "popupar_tab",
                    id: "popupar_tab",
                    class: "popupar_tab",
                    // value: "",
                    checked: props.attributes.popupar_tab ? 'checked' : '',
                    onChange: updatePopupar_tab
                }),
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Show popular tab")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "checkbox",
                    name: "ending_tab",
                    id: "ending_tab",
                    class: "ending_tab",
                    // value: "",
                    checked: props.attributes.ending_tab ? 'checked' : '',
                    onChange: updateEnding_tab
                }),
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Show ending tab")
                )
            )
        );
    },
    save:function (props){
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
                "p",
                null,
                '[wp_coupon coupon_nb="',
                props.attributes.coupon_nb,
                '" coupon_excerpt="',
                props.attributes.coupon_excerpt,
                '" coupon_excerpt_hide_img="',
                props.attributes.coupon_excerpt_hide_img,
                '" box_layout="',
                props.attributes.box_layout,
                '" paging="',
                props.attributes.paging,
                '" exp_coupon="',
                props.attributes.exp_coupon,
                '" latest_coupon_tab_hide="',
                props.attributes.latest_coupon_tab_hide,
                '" popupar_tab="',
                props.attributes.popupar_tab,
                '" ending_tab="',
                props.attributes.ending_tab,
                '"]'
            )
        );
    }
});

wp.blocks.registerBlockType('wp-coupon/categorylist', {
    title: 'WPCoupon Category',
    icon: 'category',
    category: 'widgets',
    attributes: {
        ct_depth: {type: 'string'},
        ct_orderby: {
            type: 'string',
            default: 'name'
        },
        ct_order: {
            type: 'string',
            default: 'DESC'
        },
        ct_number: {type: 'string'},
        ct_show_count: {type: 'string'},
        ct_item_per_row: {type: 'string'},
    },
    edit:function (props){
        function updateCt_depth(event){
            props.setAttributes({ct_depth: event.target.value})
        }
        function updateCt_orderby(event){
            props.setAttributes({ct_orderby: event.target.value})
        }
        function updateCt_order(event){
            props.setAttributes({ct_order: event.target.value})
        }
        function updateCt_number(event){
            props.setAttributes({ct_number: event.target.value})
        }
        function updateCt_show_count(event){
            if (event.target.checked) {
                props.setAttributes({ ct_show_count: 'on' });
            } else {
                props.setAttributes({ ct_show_count: '' });
            }
        }
        function updateCt_item_per_row(event){
            props.setAttributes({ct_item_per_row: event.target.value})
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h4", null, "WP Coupon Category"),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Depth:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "ct_depth",
                    id: "ct_depth",
                    class: "ct_depth",
                    placeholder: "Enter the number of coupon excerpt in here.",
                    value: props.attributes.ct_depth,
                    onChange: updateCt_depth
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Order by:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "select",
                    {
                        id: "ct_orderby",
                        class: "ct_orderby",
                        value: props.attributes.ct_orderby,
                        onChange: updateCt_orderby
                    },
                    wp.element.createElement(
                        "option",
                        {
                            value: "count"
                        },
                        "Count"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "name"
                        },
                        "Name"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Order:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "select",
                    {
                        id: "ct_order",
                        class: "ct_order",
                        value: props.attributes.ct_order,
                        onChange: updateCt_order
                    },
                    wp.element.createElement(
                        "option",
                        {
                            value: "desc"
                        },
                        "DESC"
                    ),
                    wp.element.createElement(
                        "option",
                        {
                            value: "asc"
                        },
                        "ASC"
                    )
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Number store to show:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "ct_number",
                    id: "ct_number",
                    class: "ct_number",
                    placeholder: "Enter the number of coupon excerpt in here.",
                    value: props.attributes.ct_number,
                    onChange: updateCt_number
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "checkbox",
                    name: "ct_show_count",
                    id: "ct_show_count",
                    class: "ct_show_count",
                    value: props.attributes.ct_show_count ? 'checked' : '',
                    onChange: updateCt_show_count
                }),
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Show count ?")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement(
                    "label",
                    null,
                    wp.element.createElement("strong", null, "Number item per row:")
                )
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("input", {
                    type: "number",
                    name: "ct_item_per_row",
                    id: "ct_item_per_row",
                    class: "ct_item_per_row",
                    placeholder: "Enter the number of coupon excerpt in here.",
                    value: props.attributes.ct_item_per_row,
                    onChange: updateCt_item_per_row
                })
            )
        );
    },
    save:function (props){
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
                "p",
                null,
                '[wp_coupon_category ct_depth="',
                props.attributes.ct_depth,
                '" ct_orderby="',
                props.attributes.ct_orderby,
                '" ct_order="',
                props.attributes.ct_order,
                '" ct_number="',
                props.attributes.ct_number,
                '" ct_show_count="',
                props.attributes.ct_show_count,
                '" ct_item_per_row="',
                props.attributes.ct_item_per_row,
                '"]'
            )
        );
    }
});

wp.blocks.registerBlockType('wp-coupon/newsletter', {
    title: 'WPCoupon Newsletter',
    icon: 'email-alt',
    category: 'widgets',
    attributes: {
        mail_chimp_action: {type: 'string'},
        before_form: {type: 'string'},
        after_form: {type: 'string'},
        facebook_url: {type: 'string'},
        twitter_url: {type: 'string'},
        linkedin_url: {type: 'string'},
        google_url: {type: 'string'},
        flicker_url: {type: 'string'},
        youtube_url: {type: 'string'},
        instagram_url: {type: 'string'},
        pinterest_url: {type: 'string'},
        social_link_target: {
            type: 'string',
            default: 'name'
        },
    },
    edit:function (props){
        function updateMail_chimp_action(event){
            props.setAttributes({mail_chimp_action: event.target.value})
        }
        function updateBefore_form(event){
            props.setAttributes({before_form: event.target.value})
        }
        function updateAfter_form(event){
            props.setAttributes({after_form: event.target.value})
        }
        function updateFacebook_url(event){
            props.setAttributes({facebook_url: event.target.value})
        }
        function updateTwitter_url(event){
            props.setAttributes({twitter_url: event.target.value})
        }
        function updateLinkedin_url(event){
            props.setAttributes({linkedin_url: event.target.value})
        }
        function updateGoogle_url(event){
            props.setAttributes({google_url: event.target.value})
        }
        function updateFlicker_url(event){
            props.setAttributes({flicker_url: event.target.value})
        }
        function updateYoutube_url(event){
            props.setAttributes({youtube_url: event.target.value})
        }
        function updateInstagram_url(event){
            props.setAttributes({instagram_url: event.target.value})
        }
        function updatePinterest_url(event){
            props.setAttributes({pinterest_url: event.target.value})
        }
        function updateSocial_link_target(event){
            props.setAttributes({social_link_target: event.target.value})
        }
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h4", null, "WP Coupon Newsletter"),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Mailchimp action:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "mail_chimp_action",
                        id: "mail_chimp_action",
                        class: "mail_chimp_action",
                        value: props.attributes.mail_chimp_action,
                        onChange: updateMail_chimp_action
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Before form:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "before_form",
                        id: "before_form",
                        class: "before_form",
                        value: props.attributes.before_form,
                        onChange: updateBefore_form
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "After form:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "after_form",
                        id: "after_form",
                        class: "after_form",
                        value: props.attributes.after_form,
                        onChange: updateAfter_form
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "facebook URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "facebook_url",
                        id: "facebook_url",
                        class: "facebook_url",
                        value: props.attributes.facebook_url,
                        onChange: updateFacebook_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "twitter URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "twitter_url",
                        id: "twitter_url",
                        class: "twitter_url",
                        value: props.attributes.twitter_url,
                        onChange: updateTwitter_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "linkedin URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "linkedin_url",
                        id: "linkedin_url",
                        class: "linkedin_url",
                        value: props.attributes.linkedin_url,
                        onChange: updateLinkedin_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "google URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "google_url",
                        id: "google_url",
                        class: "google_url",
                        value: props.attributes.google_url,
                        onChange: updateGoogle_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "google URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "flicker_url",
                        id: "flicker_url",
                        class: "flicker_url",
                        value: props.attributes.flicker_url,
                        onChange: updateFlicker_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "youtube URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "youtube_url",
                        id: "youtube_url",
                        class: "youtube_url",
                        value: props.attributes.youtube_url,
                        onChange: updateYoutube_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Instagram URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "instagram_url",
                        id: "instagram_url",
                        class: "instagram_url",
                        value: props.attributes.instagram_url,
                        onChange: updateInstagram_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Pinterest URL:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "pinterest_url",
                        id: "pinterest_url",
                        class: "pinterest_url",
                        value: props.attributes.pinterest_url,
                        onChange: updatePinterest_url
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Social link target")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "select",
                        {
                            id: "social_link_target",
                            class: "social_link_target",
                            value: props.attributes.social_link_target,
                            onChange: updateSocial_link_target
                        },
                        wp.element.createElement(
                            "option",
                            {
                                value: "blank"
                            },
                            "_blank"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "self"
                            },
                            "_self"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "parent"
                            },
                            "_parent"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "top"
                            },
                            "_top"
                        )
                    )
                )
            )
        );
    },
    save:function (props){
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
                "p",
                null,
                '[wp_coupon_newsletter mail_chimp_action="',
                props.attributes.coupon_nb,
                '" before_form="',
                props.attributes.coupon_excerpt,
                '" after_form="',
                props.attributes.coupon_excerpt_hide_img,
                '" facebook_url="',
                props.attributes.box_layout,
                '" twitter_url="',
                props.attributes.paging,
                '" linkedin_url="',
                props.attributes.exp_coupon,
                '" google_url="',
                props.attributes.latest_coupon_tab_hide,
                '" flicker_url="',
                props.attributes.popupar_tab,
                '" youtube_url="',
                props.attributes.popupar_tab,
                '" instagram_url="',
                props.attributes.popupar_tab,
                '" pinterest_url="',
                props.attributes.popupar_tab,
                '" social_link_target="',
                props.attributes.ending_tab,
                '"]'
            )
        );
    }
});

wp.blocks.registerBlockType('wp-coupon/store-carousel', {
    title: 'WPCoupon Store Carousel',
    icon: 'image-flip-horizontal',
    category: 'widgets',
    attributes: {
        stc_feature_store_only: {type: 'string'},
        stc_include: {type: 'string'},
        stc_exc_id: {type: 'string'},
        stc_order_by: {type: 'string'},
        stc_order: {type: 'string'},
        stc_slide_speed: {type: 'string'},
        stc_pagi_speed: {type: 'string'},
        stc_num_item_visible: {type: 'string'},
        stc_num_item_visible_tab: {type: 'string'},
        stc_num_item_visible_mobile: {type: 'string'},
        stc_auto_play: {type: 'string'},
        stc_stop_on_hover: {type: 'string'},
    },
    edit:function (props){
        function updateStc_feature_store_only(event){
            if (event.target.checked) {
                props.setAttributes({ stc_feature_store_only: 'on' });
            } else {
                props.setAttributes({ stc_feature_store_only: '' });
            }
        }
        function updateStc_include(event){
            props.setAttributes({stc_include: event.target.value})
        }
        function updateStc_exc_id(event){
            props.setAttributes({stc_exc_id: event.target.value})
        }
        function updateStc_order_by(event){
            props.setAttributes({stc_order_by: event.target.value})
        }
        function updateStc_order(event){
            props.setAttributes({stc_order: event.target.value})
        }
        function updateStc_slide_speed(event){
            props.setAttributes({stc_slide_speed: event.target.value})
        }
        function updateStc_pagi_speed(event){
            props.setAttributes({stc_pagi_speed: event.target.value})
        }
        function updateStc_num_item_visible(event){
            props.setAttributes({stc_num_item_visible: event.target.value})
        }
        function updateStc_num_item_visible_tab(event){
            props.setAttributes({stc_num_item_visible_tab: event.target.value})
        }
        function updateStc_num_item_visible_mobile(event){
            props.setAttributes({stc_num_item_visible_mobile: event.target.value})
        }
        function updateStc_auto_play(event){
            props.setAttributes({stc_auto_play: event.target.value})
        }
        function updateStc_stop_on_hover(event){
            props.setAttributes({stc_stop_on_hover: event.target.value})
        }
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h4", null, "WP Coupon Store Carousel"),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "checkbox",
                        name: "stc_feature_store_only",
                        id: "stc_feature_store_only",
                        class: "stc_feature_store_only",
                        value: props.attributes.stc_feature_store_only,
                        onChange: updateStc_feature_store_only
                    }),
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Featured stores only.:"
                        )
                    )
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Include:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "stc_include",
                        id: "stc_include",
                        class: "stc_include",
                        value: props.attributes.stc_include,
                        onChange: updateStc_include
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Exclude:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "stc_exc_id",
                        id: "stc_exc_id",
                        class: "stc_exc_id",
                        value: props.attributes.stc_exc_id,
                        onChange: updateStc_exc_id
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "How many stores to display ?"
                        )
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "number",
                        name: "stc_order",
                        id: "stc_order",
                        class: "stc_order",
                        value: props.attributes.stc_order,
                        onChange: updateStc_order
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Order by:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "select",
                        {
                            id: "stc_order_by",
                            class: "stc_order_by",
                            value: props.attributes.stc_order_by,
                            onChange: updateStc_order_by
                        },
                        wp.element.createElement(
                            "option",
                            {
                                value: "none"
                            },
                            "Default"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "count"
                            },
                            "Number of Coupons"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "name"
                            },
                            "Title"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "id"
                            },
                            "Preserve Store ID order given in the inlcude IDs"
                        )
                    )
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Order:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "select",
                        {
                            id: "stc_order",
                            class: "stc_order",
                            value: "",
                            onchange: ""
                        },
                        wp.element.createElement(
                            "option",
                            {
                                value: "desc"
                            },
                            "DESC"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "asc"
                            },
                            "ASC"
                        )
                    )
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Slide speed (millisecond):"
                        )
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "number",
                        name: "stc_slide_speed",
                        id: "stc_slide_speed",
                        class: "stc_slide_speed",
                        value: props.attributes.stc_slide_speed,
                        onChange: updateStc_slide_speed
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Pagination speed (millisecond):"
                        )
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "number",
                        name: "stc_pagi_speed",
                        id: "stc_pagi_speed",
                        class: "stc_pagi_speed",
                        value: props.attributes.stc_pagi_speed,
                        onChange: updateStc_pagi_speed
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Number items visible:"
                        )
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "number",
                        name: "stc_num_item_visible",
                        id: "stc_num_item_visible",
                        class: "stc_num_item_visible",
                        value: props.attributes.stc_num_item_visible,
                        onChange: updateStc_num_item_visible
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Number items visible on tablet:"
                        )
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "number",
                        name: "stc_num_item_visible_tab",
                        id: "stc_num_item_visible_tab",
                        class: "stc_num_item_visible_tab",
                        value: props.attributes.stc_num_item_visible_tab,
                        onChange: updateStc_num_item_visible_tab
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement(
                            "strong",
                            null,
                            "Number items visible on mobile:"
                        )
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement("input", {
                        type: "text",
                        name: "stc_num_item_visible_mobile",
                        id: "stc_num_item_visible_mobile",
                        class: "stc_num_item_visible_mobile",
                        value: props.attributes.stc_num_item_visible_mobile,
                        onChange: updateStc_num_item_visible_mobile
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Auto play:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "select",
                        {
                            id: "stc_auto_play",
                            class: "stc_auto_play",
                            value: props.attributes.stc_auto_play,
                            onChange: updateStc_auto_play
                        },
                        wp.element.createElement(
                            "option",
                            {
                                value: "true"
                            },
                            "Yes"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "false"
                            },
                            "No"
                        )
                    )
                )
            ),
            wp.element.createElement(
                "div",
                {
                    class: "input-row"
                },
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "label",
                        null,
                        wp.element.createElement("strong", null, "Stop on hover:")
                    )
                ),
                wp.element.createElement(
                    "p",
                    null,
                    wp.element.createElement(
                        "select",
                        {
                            id: "stc_stop_on_hover",
                            class: "stc_stop_on_hover",
                            value: props.attributes.stc_stop_on_hover,
                            onChange: updateStc_stop_on_hover
                        },
                        wp.element.createElement(
                            "option",
                            {
                                value: "true"
                            },
                            "Yes"
                        ),
                        wp.element.createElement(
                            "option",
                            {
                                value: "false"
                            },
                            "No"
                        )
                    )
                )
            )
        );
    },
    save:function (props){
        return 0;
    }
});