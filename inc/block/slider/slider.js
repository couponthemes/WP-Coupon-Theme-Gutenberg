// alert("Hello! I am an alert box!!");

wp.blocks.registerBlockType('theme/slider', {
    title: 'My Slider',
    icon: 'smiley',
    category: 'widgets',
    attributes: {
        content: {type: 'string'},
        button: {type: ''}
    },
    edit:function (props){
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("input", {
                type: "text",
                value: ""
            }),
            wp.element.createElement(
                "button",
                {
                    class: "components-button.is-primary"
                },
                "+"
            )
        );
    },
    save:function (props){
        // return wp.element.createElement(
        //     "h3",
        //     {
        //         style: {
        //             border: `5px solid ${props.attributes.color}`
        //         }
        //     },
        //     props.attributes.content
        // );

        return null
    }
})
