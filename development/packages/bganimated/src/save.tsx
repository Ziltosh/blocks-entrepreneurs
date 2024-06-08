import {useBlockProps} from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			{/*<Lottie animationData={undefined} className="bg-animated-grid" />*/}
		</div>
	);
}
