import {useBlockProps} from "@wordpress/block-editor";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} key={"render"} data-attributes={JSON.stringify(attributes)}>
            <div className="but star-but">
                <span>{attributes.text}</span>
                {/*<img className="star-1" src={star1} alt=""/>*/}
                {/*<img className="star-2" src={star2} alt=""/>*/}
                {/*<img className="star-3" src={star2} alt=""/>*/}
            </div>
        </div>
    )
}
