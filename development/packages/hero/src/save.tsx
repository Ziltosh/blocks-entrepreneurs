import {useBlockProps} from "@wordpress/block-editor";
import {Hero} from "./Hero";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();
    // const innerBlockProps = useInnerBlocksProps({}, {
    //     templateLock: 'all',
    //     template: [['entrepreneurs/doublebutton']]
    // });

    return (
        <div {...blockProps}>
            <Hero videoState={true} headerRef={null} />
        </div>
    );

}
