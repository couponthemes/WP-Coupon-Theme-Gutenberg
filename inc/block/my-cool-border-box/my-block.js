// alert("Hello! I am an alert box!!");

wp.blocks.registerBlockType('brad/border-box', {
    title: 'My Cool Border Box',
    icon: 'smiley',
    category: 'widgets',
    attributes: {
        content: {type: 'string'},
        color: {type: ''}
    },
    edit:function (props){
        function updateContent(event){
            props.setAttributes({content: event.target.value})
        }
        function updateColor(value){
            props.setAttributes({color: value.hex})
        }
        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h2", null, "Test Title"),
            wp.element.createElement("input", {
                type: "text",
                name: "text",
                value: props.attributes.content,
                onChange: updateContent
            }),
            wp.element.createElement(wp.components.ColorPicker, {
                color: props.attributes.color,
                onChangeComplete: updateColor
            })
        );
    },
    save:function (props){
        return wp.element.createElement(
            "h3",
            {
                style: {
                    border: `5px solid ${props.attributes.color}`
                }
            },
            props.attributes.content
        );

    }
})