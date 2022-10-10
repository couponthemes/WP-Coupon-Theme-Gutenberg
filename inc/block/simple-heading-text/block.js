/**
 * Editable "Hello World" text.  Introduces the concept of attributes and
 * extracting them, and the default text formatting added by RichText.
 */
( function ( blocks, editor, i18n, element, blockEditor ) {
	var el = element.createElement;
	var __ = i18n.__;
	var RichText = editor.RichText;
	var useBlockProps = blockEditor.useBlockProps;

	blocks.registerBlockType( 'gutenberg-examples/slide', {
		title: __( 'Simple Heading Text', 'gutenberg-examples' ),
		icon: 'heading',
		category: 'layout',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
		},

		edit: function ( props ) {
			var content = props.attributes.content;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				RichText,
				useBlockProps( {
					tagName: 'h2',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				} )
			);
		},

		save: function ( props ) {
			return el(
				RichText.Content,
				useBlockProps.save( {
					tagName: 'h2',
					value: props.attributes.content,
				} )
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.blockEditor
);
