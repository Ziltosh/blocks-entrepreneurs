import { hydrateRoot } from '@wordpress/element';
import React from 'react';
import { DoubleButton } from './DoubleButton';

const elements = document.querySelectorAll('.wp-block-entrepreneurs-appel');

const Appel = () => {
    return (
        <>
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
        </>
    );
};

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <Appel />);
    });
}
