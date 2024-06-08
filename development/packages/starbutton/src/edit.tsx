import {useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";
import {StarButton} from "./StarButton";

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();

	return [
		<div key="render" {...blockProps}>
            <StarButton />
		</div>
	];
}
