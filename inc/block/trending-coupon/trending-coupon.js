/*alert("Hello! I am an alert box!!");*/

wp.blocks.registerBlockType('brad/border-box', {
    title: 'WPCoupon Coupons',
    icon: 'tag',
    category: 'widgets',
    attributes: {
        coupon_nb: {type: 'string'},
        coupon_excerpt: {type: 'string'},
        coupon_excerpt_hide_img: {type: 'string'},
        box_layout: {
            type: 'string',
            default: 'less'
        },
        paging: {
            type: 'string',
            default: 'no'
        },
        get_btn: {
            type: 'string',
            default: ''
        }
    },
    edit:function (props){
        function updateContent(event){
            props.setAttributes({block_title: event.target.value})
        }
        function updateCoupon_nb(event){
            props.setAttributes({coupon_nb: event.target.value})
        }
        function updateExcr_len(event){
            props.setAttributes({excr_len: event.target.value})
        }
        /*
        *Test
         */
        function updateGet_btn(event) {
            if (event.target.checked) {
                props.setAttributes({ get_btn: 'on' });
            } else {
                props.setAttributes({ get_btn: '' });
            }
        }

        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    null,
                    React.createElement(
                        "strong",
                        null,
                        "Number coupons to show:"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "number",
                    name: "coupon_nb",
                    id: "coupon_nb",
                    class: "coupon_nb",
                    style: "width: 100%;",
                    placeholder: "Enter the number of coupon amount in here.",
                    value: "",
                    onChange: ""
                })
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    null,
                    React.createElement("strong", null, "Excerpt length:")
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "number",
                    name: "coupon_excerpt",
                    id: "coupon_excerpt",
                    class: "coupon_excerpt",
                    style: "width: 100%;",
                    placeholder: "Enter the number of coupon excerpt in here.",
                    value: "",
                    onChange: ""
                })
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    null,
                    React.createElement(
                        "strong",
                        null,
                        "Excerpt length if hide thumbnails:"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "number",
                    name: "coupon_excerpt_hide_img",
                    id: "coupon_excerpt_hide_img",
                    class: "coupon_excerpt_hide_img",
                    style: "width: 100%",
                    placeholder:
                        "Enter the number of coupon excerpt for when thumbnails is hide in here.",
                    value: "",
                    onChange: ""
                })
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    null,
                    React.createElement("strong", null, "Box layout:")
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "select",
                    {
                        id: "box_layout",
                        class: "box_layout",
                        style: "width: 100%;",
                        value: imageFilter,
                        onChange: setFilter
                    },
                    React.createElement(
                        "option",
                        {
                            value: "less"
                        },
                        "Less"
                    ),
                    React.createElement(
                        "option",
                        {
                            value: "full"
                        },
                        "Full"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    null,
                    React.createElement("strong", null, "Show paging:")
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "select",
                    {
                        id: "paging",
                        name: "paging",
                        style: "width: 100%;",
                        value: imageFilter,
                        onChange: setFilter
                    },
                    React.createElement(
                        "option",
                        {
                            value: "no"
                        },
                        "No"
                    ),
                    React.createElement(
                        "option",
                        {
                            value: "yes"
                        },
                        "Yes"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "exp_coupon",
                    id: "exp_coupon",
                    class: "exp_coupon",
                    value: "",
                    onChange: ""
                }),
                React.createElement(
                    "label",
                    null,
                    React.createElement(
                        "strong",
                        null,
                        "Do not show expired coupons."
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "latest_coupon_tab_hide",
                    id: "latest_coupon_tab_hide",
                    class: "latest_coupon_tab_hide",
                    value: "",
                    onChange: ""
                }),
                React.createElement(
                    "label",
                    null,
                    React.createElement(
                        "strong",
                        null,
                        "Hide latest coupons tab"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "popupar_tab",
                    id: "popupar_tab",
                    class: "popupar_tab",
                    value: "",
                    onChange: ""
                }),
                React.createElement(
                    "label",
                    null,
                    React.createElement("strong", null, "Show popular tab")
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "ending_tab",
                    id: "ending_tab",
                    class: "ending_tab",
                    value: "",
                    onChange: ""
                }),
                React.createElement(
                    "label",
                    null,
                    React.createElement("strong", null, "Show ending tab")
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
                '[wp_coupon item_count="',
                props.attributes.coupon_nb,
                '" description_count="',
                props.attributes.excr_len,
                '"]'
            )
        );
    }
})