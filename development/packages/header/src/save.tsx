import {useBlockProps, useInnerBlocksProps} from "@wordpress/block-editor";

export default function Save({attributes, className}) {
    const blockProps = useBlockProps.save()
    const innerBlockProps = useInnerBlocksProps.save(blockProps)

    return (
        <div key={"render"} {...blockProps}>
            <header {...innerBlockProps} id="header">
                {innerBlockProps.children}
            </header>
        </div>
    );

}