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