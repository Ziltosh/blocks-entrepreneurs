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
                    <span>Les 3 piliers fondamentaux du succès</span>
                    <span>d’un entrepreneur</span>
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
