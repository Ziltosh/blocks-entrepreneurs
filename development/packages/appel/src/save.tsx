import {useBlockProps} from "@wordpress/block-editor";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} key={"render"} id="appel">
            {/*<div className="highlight highlight-red"></div>*/}
            <div className="header">
                <div className="section-title">
          <span>
            Je souhaite être recontacté
          </span>
                    <span>par Entrepreneurs.com</span>
                </div>
                <div className="text-wrapper">
                    <p>
                        Cliquez et remplissez le formulaire afin que nous puissions vous recontacter et répondre à vos
                        éventuelles questions
                    </p>
                </div>
            </div>

        </div>
    );
}
