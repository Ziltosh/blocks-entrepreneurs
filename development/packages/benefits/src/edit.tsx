import {useBlockProps} from '@wordpress/block-editor';
import './editor-style.css';
import {useRef} from '@wordpress/element';
import Lottie from 'lottie-react';
import letter from './Lotties/E.json';

import Icon1 from './img/Icon-4.png';
import Icon2 from './img/Icon-5.png';
import Icon3 from './img/Icon-6.png';

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    return (
        <div key="render" {...blockProps} id="benefits">
            <Lottie animationData={letter} className="letter-e" />
            <div className="highlight highlight-red"></div>
            <div ref={headerRef} className="header">
                <div className="small-badge">Nos programmes</div>
                <h1 className="section-title">
                    <span>Nous aidons les</span>
                    <span>Entrepreneurs</span>
                </h1>
                <p>
                    Qui sont conscients de leur potentiel et qui savent
                    <br /> qu&apos;ils ne sont qu&apos;à une étape de propulser leur activité, online ou offline, à un
                    niveau supérieur. <br /> Nous sommes cette étape cruciale pour votre business.
                </p>
            </div>
            <div className="cards" ref={cardsRef}>
                <div className="card">
                    <img src={Icon1} alt="" />
                    <h2>Transformation dès la 1ère H</h2>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon2} alt="" />
                    <h2>Acquisition d&apos;une maîtrise Business, transmise par les meilleurs experts</h2>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon3} alt="" />
                    <h2>Croissance constante et prédictible</h2>
                    <div className="border-line"></div>
                </div>
            </div>
        </div>
    );
}
