import {useBlockProps} from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

	return (
		<h2 {...blockProps} key={"render"} className="section-title">
			<span>{attributes.line1}</span>
			<span>{attributes.line2}</span>
		</h2>
	);
}
