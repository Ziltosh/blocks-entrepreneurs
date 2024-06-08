import {useBlockProps} from "@wordpress/block-editor";
import bgLines1 from "./Lotties/BACKGROUND LINES/1920.json";

import "./editor-style.css";
import Lottie from "lottie-react";

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();

	const device = "desktop";
	const animation = bgLines1;

	return [
		<div key="render" {...blockProps}>
			<Lottie animationData={animation} className="bg-animated-grid" />
		</div>
	];
}
