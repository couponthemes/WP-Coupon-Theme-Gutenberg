/*alert("Hello! I am an alert box!!");*/

wp.blocks.registerBlockType('brad/border-box', {
    title: 'Trending Coupons',
    icon: 'tag',
    category: 'widgets',
    attributes: {
        block_title: {type: 'string'},
        coupon_nb: {type: 'string'},
        excr_len: {type: 'string'}
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
        return wp.element.createElement(
            "div",
            {
                class: "widget-content"
            },
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Title:"),
                wp.element.createElement("input", {
                    type: "text",
                    name: "block_title",
                    class: "block_title",
                    id: "block_title",
                    value: props.attributes.block_title,
                    onChange: updateContent
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Number coupons to show:"),
                wp.element.createElement("input", {
                    type: "number",
                    name: "coupon_nb",
                    class: "coupon_nb",
                    id: "coupon_nb",
                    value: props.attributes.coupon_nb,
                    onChange: updateCoupon_nb
                })
            ),
            wp.element.createElement(
                "p",
                null,
                wp.element.createElement("label", null, "Excerpt length:"),
                wp.element.createElement("input", {
                    type: "number",
                    name: "excr_len",
                    class: "excr_len",
                    id: "excr_len",
                    value: props.attributes.excr_len,
                    onChange: updateExcr_len
                })
            ),

            // wp.element.createElement(
            //     "p",
            //     null,
            //     wp.element.createElement("label", null, "Show paging:"),
            //     wp.element.createElement("input", {
            //         type: "checkbox",
            //         name: "show_paging",
            //         class: "show_paging",
            //         id: "show_paging"
            //     })
            // ),
            // wp.element.createElement(
            //     "p",
            //     null,
            //     wp.element.createElement(
            //         "label",
            //         null,
            //         "Do not show expired coupons."
            //     ),
            //     wp.element.createElement("input", {
            //         type: "checkbox",
            //         name: "remove_exp_coupon",
            //         class: "remove_exp_coupon",
            //         id: "remove_exp_coupon"
            //     })
            // ),
            // wp.element.createElement(
            //     "p",
            //     null,
            //     wp.element.createElement("label", null, "Show Get Button:"),
            //     wp.element.createElement("input", {
            //         type: "checkbox",
            //         name: "show_get_btn",
            //         class: "show_get_btn",
            //         id: "show_get_btn"
            //     })
            // )
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
                '[coupon item_count="',
                props.attributes.coupon_nb,
                '" description_count="',
                props.attributes.excr_len,
                '"]'
            )
        );
    }
})