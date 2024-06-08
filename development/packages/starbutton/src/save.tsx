import {useBlockProps} from "@wordpress/block-editor";
import {StarButton} from "./StarButton";

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
            <StarButton />
		</div>
	);
}
