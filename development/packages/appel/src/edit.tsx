import { useBlockProps } from '@wordpress/block-editor';

import './editor-style.css';

import { DoubleButton } from './DoubleButton';

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();

    return [
        <div {...blockProps} key={'render'} id="appel">
            {/*<div className="highlight highlight-red"></div>*/}
            <div className="header">
                <div className="section-title">
                    <span>Je souhaite être recontacté</span>
                    <span>par Entrepreneurs</span>
                </div>
                <div className="text-wrapper">
                    <p>
                        Cliquez et remplissez le formulaire afin que nous puissions vous recontacter et répondre à vos
                        éventuelles questions
                    </p>
                    <DoubleButton text="Accéder au formulaire" disableAnimation={false} />
                </div>
            </div>
        </div>,
    ];
}
