import {InspectorControls, useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";
import {PanelBody, TextControl} from "@wordpress/components";

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();

    const handleChangeText = (text) => {
        setAttributes({text});
    }

    return [
        <>
            <div key="render" {...blockProps}>
                <div className="but star-but">
                    <span>{attributes.text}</span>
                    {/*<img className="star-1" src={star1} alt=""/>*/}
                    {/*<img className="star-2" src={star2} alt=""/>*/}
                    {/*<img className="star-3" src={star2} alt=""/>*/}
                </div>
            </div>
            <InspectorControls>
                <PanelBody title={"Réglages"}>
                    <TextControl
                        help=""
                        label="Texte du bouton"
                        onChange={handleChangeText}
                        value={attributes.text}
                    />

                </PanelBody>
            </InspectorControls>
        </>
    ];
}
