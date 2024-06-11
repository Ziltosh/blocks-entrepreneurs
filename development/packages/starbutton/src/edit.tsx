import {useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();

    return [
        <div key="render" {...blockProps}>
            <div className="but star-but">
                <span>Réserver un appel</span>
                {/*<img className="star-1" src={star1} alt=""/>*/}
                {/*<img className="star-2" src={star2} alt=""/>*/}
                {/*<img className="star-3" src={star2} alt=""/>*/}
            </div>
        </div>
    ];
}
