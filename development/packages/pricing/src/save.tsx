import {useBlockProps} from '@wordpress/block-editor';

import cardBg from './img/card-bg-hover.png';
import {Card} from './card.type';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    const cards: Card[] = [
        {
            title: 'Le Coaching Starter',
            price: {
                from: 0,
                to: 5000,
            },
            buttonText: 'En savoir plus sur le Coaching Starter',
            des: `
			Tout ce dont vous avez besoin pour élever méthodiquement votre projet entrepreneurial.

	
			Le bon état d'esprit,
			La bonne posture,
			La bonne offresur
			le bon marché.`,
        },
        {
            title: 'Le Systeme',
            buttonText: 'En savoir plus sur Le Systeme',
            des: "Vous intégrez le Système en 4 étapes qui transforme aujourd'hui tout business en un business capable de générer 300 000€ de CA annuel.300 000 € ?Difficile 	lorsqu'on navigue à vue.Une ligne comptable lorsqu'on utilise les bons instruments de bord.",
            price: {
                from: 5000,
                to: 25000,
            },
        },
        {
            title: 'Le Scaling',
            buttonText: 'En savoir plus sur Le Scaling',
            des: 'Plongés en immersion, conseillés par les meilleurs experts, chaque fragment de votre business est décortiqué, analysé, évalué.Vous prenez les mesures	exactes dont votre business a besoin pour dépasser le million de CA annuel.',
            price: {
                from: 15000,
                to: 85000,
            },
        },
        {
            title: 'Le Consulting',
            buttonText: 'En savoir plus sur Le Consulting',
            des: 'Vous vous libérez des tâches opérationnelles pour vous concentrer exclusivement sur les aspects stratégiques de votre entreprise.Vous disposez de toutes le		ressources dont vous manquiez pour devenir le leader de votre marché.',
            priceText: 'CA démultiplié et exponentiel sur le long terme.',
        },
    ];

    return (
        <div key="render" {...blockProps} id="pricing">
            {/* <BGGRid images={grids} /> */}
            {/* <BGAnimatedLines /> */}
            <div className="highlight highlight-red"></div>
            <div ref={null} className="header">
                <div className="small-badge">Appliqués et validés par +10.000 entrepreneurs francophones</div>
                <div className="inner-header">
                    <h1 className="section-title">
                        <span>4 Accompagnements</span>
                        <span>Proposés</span>
                    </h1>
                    <p>
                        Résultats de l&apos;expertise acquise par Alec Henry et Entrepreneurs.com depuis plus de 6 ans.
                    </p>
                </div>
            </div>
            <div ref={null} className="cards">
                {cards.map((card, i) => (
                    <div className="card" key={i}>
                        <img className="card-bg" src={cardBg} alt="" />
                        <div className="card-header">
                            <h1>{card.title}</h1>
                            <p>{card.des}</p>
                        </div>
                        <div className="card-footer">
                            {card.price && (
                                <div className="price">
                                    <p>Pour les Entrepreneurs générant...</p>
                                    <div>
                                        <span>De</span>
                                        <span className="price-number from">{card.price?.from}</span>
                                        <span>à</span>
                                        <span className="price-number to">{card.price?.to}</span>
                                        <span>de CA/mois.</span>
                                    </div>
                                </div>
                            )}
                            {card.priceText && <div className="price-text">{card?.priceText}</div>}
                            <button className="but">
                                <span>{card.buttonText}</span>
                                {/* <RedArrRight /> */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
