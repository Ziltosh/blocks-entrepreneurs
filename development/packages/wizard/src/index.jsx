import {registerBlockType} from "@wordpress/blocks";

import "./style.scss";

import edit from "./edit";
import save from "./save";
import infos from "./block.json";

registerBlockType("entrepreneurs/wizard", {
	edit,
	save,
	attributes: {},
	...infos,
});
