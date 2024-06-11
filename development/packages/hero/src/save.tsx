import {useBlockProps, useInnerBlocksProps} from "@wordpress/block-editor";
import {Hero} from "./Hero";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();
    const innerBlockProps = useInnerBlocksProps.save(blockProps);

    return (
        <div {...blockProps}>
            <Hero {...innerBlockProps} videoState={true} headerRef={null} setVideoState={null} videoRef={null} videoWrapperRef={null} />
        </div>
    );

}
