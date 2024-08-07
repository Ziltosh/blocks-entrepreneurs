import {useBlockProps} from '@wordpress/block-editor';
import './editor-style.css';
import {useRef} from '@wordpress/element';

import Icon1 from './img/Icon-4.png';
import Icon2 from './img/Icon-5.png';
import Icon3 from './img/Icon-6.png';

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();
    const headerRef = useRef<HTMLDivElement>(null);
    const headerRef2 = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    return (
        <div key="render" {...blockProps} id="benefits">
            {/*<Lottie animationData={letter} className="letter-e"/>*/}
            <div className="highlight highlight-red"></div>
            <div ref={headerRef} className="header">
                {/*<div className="small-badge">Nos programmes</div>*/}
                <h1 className="section-title">
                    <span>ENTREPRENEURS.COM</span>
                </h1>
                <p>
                    Une équipe d’experts au service d'entrepreneurs ambitieux souhaitant être accompagnés
                    personnellement, tout en intégrant la puissance du collectif, dans l’atteinte de leur succès.
                </p>
            </div>
            <div className="cards" ref={cardsRef}>
                <div className="card">
                    <img src={Icon1} alt=""/>
                    <h2>Stratégies</h2>
                    <p>Nous vous délivrons toutes les stratégies et process vous permettant d’aller dans un chemin de
                        croissance et de scaling prédictible. </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon2} alt=""/>
                    <h2>Actions</h2>
                    <p>Obtenez un plan d’action précis et évolutif, qui suit les stratégies conceptualisées, vous
                        permettant de savoir exactement quelles actions menées pour être certain d’atteindre les
                        objectifs définis au préalable. </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon3} alt=""/>
                    <h2>Résultats</h2>
                    <p>Dépassez les 100K mensuel et libérez-vous du temps en sortant de l’opérationnel sans entraver la
                        qualité de votre produit ou service délivré.
                    </p>
                    <div className="border-line"></div>
                </div>
            </div>

        </div>
    );
}
