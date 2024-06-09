import {useBlockProps} from "@wordpress/block-editor";
import DoubleButton from "./DoubleButton";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <DoubleButton onMouseOver={null} onMouseLeave={null} buttonRef={null} animationState={false}
                          text={"test"}/>
        </div>
    );
}
