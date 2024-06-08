import {useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";
import {Header} from "./header";

export default function Edit({attributes, setAttributes, className}) {
    const blockProps = useBlockProps();
    // const innerBlockProps = useInnerBlocksProps()

    return (
        <div key={"render"} {...blockProps}>
            <Header menuId={1} />
        </div>
    )
}

