import {useBlockProps} from "@wordpress/block-editor";
import {Header} from "./header";

export default function Save({attributes, className}) {
    const blockProps = useBlockProps.save()

    return (
        <div key={"render"} {...blockProps}>
            <Header menuId={undefined} />
        </div>
    );

}