// alert("Hello! I am an alert box!!");

wp.blocks.registerBlockType('brad/border-box', {
    title: 'My Cool Border Box',
    icon: 'smiley',
    category: 'widgets',
    attributes: {
        content: {type: 'string'},
        color: {type: ''}
    },
    edit: function(props) {
        return 0;
    },
    save:function (props){
        return 0;
    }
})