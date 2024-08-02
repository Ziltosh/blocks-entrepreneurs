import {useBlockProps} from "@wordpress/block-editor";
import redArrow from "./img/red-bg-rarrow.svg";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} key={"render"} data-attributes={JSON.stringify(attributes)}>
            <a href={attributes.lien} style={{textDecoration: "none"}}>
                <button
                    className={`but double-border`}
                >
                    <span>{attributes.text}</span>
                    <img src={redArrow} alt=""/>
                    {/* <RedArrRight /> */}
                </button>
            </a>
        </div>
);
}
