import {registerBlockType} from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import infos from "./block.json"

registerBlockType("entrepreneurs/header", {
    edit,
    save,
    attributes: {},
    ...infos
});