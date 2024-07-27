import {RichText, useBlockProps} from "@wordpress/block-editor";

import "./editor-style.scss";

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();

    const handleChangeLine1 = (line1) => {
        setAttributes({line1});
    }

    const handleChangeLine2 = (line2) => {
        setAttributes({line2});
    }

    return (
        <>
            <h2 {...blockProps} key={"render"}>
                <RichText onChange={handleChangeLine1} value={attributes.line1} tagName={'span'}/>
                <RichText onChange={handleChangeLine2} value={attributes.line2} tagName={'span'}/>
            </h2>

        </>
    );
}
