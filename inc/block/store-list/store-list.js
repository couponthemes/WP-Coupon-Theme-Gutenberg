/*alert("Hello! I am an alert box!!");*/

wp.blocks.registerBlockType('brad/border-box', {
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
})