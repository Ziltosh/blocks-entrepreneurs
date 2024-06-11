import {useBlockProps, useInnerBlocksProps} from "@wordpress/block-editor";

import "./editor-style.css";
import {Hero} from "./Hero";
import {useState} from "@wordpress/element";


export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();
    const innerBlockProps = useInnerBlocksProps(blockProps, {
        templateLock: 'all',
        template: [
            ['core/paragraph', {content: 'This is a hero block. Add your content here.'}],
        ],
    })
    const [state, setState] = useState(true);

    return (
        <div {...blockProps}>
            <Hero videoState={state} headerRef={null} videoRef={null} videoWrapperRef={null} setVideoState={undefined} {...innerBlockProps} />
        </div>
    );
}

