import {useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";
import DoubleButton from "./DoubleButton";
import React from "react";

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();

    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const onMouseOver = () => {
        console.log("onMouseOver");
    }

    return (
        <div {...blockProps}>
            <DoubleButton onMouseOver={onMouseOver} buttonRef={buttonRef} animationState={true} text={"test"}/>
        </div>
    )
}
