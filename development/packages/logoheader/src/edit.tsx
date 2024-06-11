import {useBlockProps} from "@wordpress/block-editor";
import elogo from "./img/svg/e-logo.svg";

import "./editor-style.css";

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();

	return [
		<div key="render" {...blockProps}>
			<svg
				className="mobile-menu-icon"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M3 12H15M3 6H21M3 18H21"
					stroke="#CDCDCD"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<img src={elogo} alt="logo" className="logo"/>
		</div>,
	];
}
