import {useBlockProps} from "@wordpress/block-editor";
import {Hero} from "./Hero";

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
            <Hero />
		</div>
	);
}
