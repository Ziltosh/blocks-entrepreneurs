import {useBlockProps} from '@wordpress/block-editor';
import './editor-style.css';
import {useRef} from '@wordpress/element';
import Lottie from 'lottie-react';
import letter from './Lotties/E.json';

import Icon1 from './img/Icon-4.png';
import Icon2 from './img/Icon-5.png';
import Icon3 from './img/Icon-6.png';
import {DoubleButton} from "./DoubleButton";

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();
    const headerRef = useRef<HTMLDivElement>(null);
    const headerRef2 = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    return (
        <div key="render" {...blockProps} id="benefits">
            <Lottie animationData={letter} className="letter-e"/>
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
            <DoubleButton text={"En savoir plus sur l’équipe Entrepreneurs.com"} disableAnimation={false}/>

            <div ref={headerRef2} className="header">
                {/*<div className="small-badge">Nos programmes</div>*/}
                <h1 className="section-title">
                    <span>Les 3 piliers fondamentaux</span>
                    <span>du succès d’un entrepreneur</span>
                </h1>

            </div>
            <div className="cards" ref={cardsRef}>
                <div className="card">
                    <img src={Icon1} alt=""/>
                    <h2>Accompagnement
                        individuel
                    </h2>
                    <p>Votre activité et votre personnalité sont uniques, donc les stratégies qui permettront sa
                        croissance doivent l’être aussi. </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon2} alt=""/>
                    <h2>Mise en place de stratégies et d’actions</h2>
                    <p>L’atteinte de vos objectifs passe inévitablement par votre passage à l’action.
                        Avec un bon suivi, une bonne énergie et une idée précise de ce qui doit être fait, jour après
                        jour pour performer, vous ne pourrez que réussir.
                    </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon3} alt=""/>
                    <h2>Accompagnement collectif</h2>
                    <p>Faire partie d’un puissant réseau d’entrepreneurs et de mettre en commun les idées de chacun
                        permet de créer un puissant cerveau collectif permettant de se challenger et de faire avancer 5x
                        plus vite ses idées, donc ses résultats</p>
                    <div className="border-line"></div>
                </div>
            </div>
        </div>
    );
}
