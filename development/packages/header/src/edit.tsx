import {useBlockProps, useInnerBlocksProps} from "@wordpress/block-editor";

import "./editor-style.scss";

export default function Edit({attributes, setAttributes, className}) {
    const blockProps = useBlockProps();
    const innerBlockProps = useInnerBlocksProps(blockProps, {
        template: [
            ["entrepreneurs/logoheader"],
            ["entrepreneurs/menuheader"],
            ["entrepreneurs/starbutton"],
        ],
        templateLock: 'all'
    })

    return (
        <div key={"render"} {...blockProps}>
            <header {...innerBlockProps} id="header">
                    {innerBlockProps.children}
            </header>
        </div>
    )
}

