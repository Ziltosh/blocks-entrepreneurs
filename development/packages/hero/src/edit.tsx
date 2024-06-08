import {useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";
import {Hero} from "./Hero";
import {useState} from "@wordpress/element";

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();
    const [state, setState] = useState(true);

    return (
        <Hero {...blockProps} videoState={state} />
    );
}
