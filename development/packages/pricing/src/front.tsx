import {hydrateRoot, useRef} from '@wordpress/element';
import BGGRid from './BGGrid';
import {BGAnimatedLines} from './BgAnimatedLines';

import {gsap, ScrollTrigger, SplitText} from './gsap';

import cardBg from './img/card-bg-hover.png';
import gridDesktop from './img/sections-grids/pricing/bg-grid-1920.svg';
import gridLaptop from './img/sections-grids/pricing/bg-grid-1280.svg';
import gridTablet from './img/sections-grids/pricing/bg-grid-768.svg';
import gridMobile from './img/sections-grids/pricing/bg-grid-375.svg';
import arrRight from './img/arrow-right.svg';
import {Card} from './card.type';
import {useGSAP} from '@gsap/react';

const elements = document.querySelectorAll('.wp-block-entrepreneurs-pricing');

const Pricing = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];

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

    useGSAP(() => {
        if (!headerRef.current || !cardsRef.current) return;

        const tl = gsap.timeline();
        const mm = gsap.matchMedia();
        const split1 = new SplitText(headerRef.current?.querySelectorAll('h1 span'), {
            type: 'words',
        });
        const split2 = new SplitText(headerRef.current?.querySelector('p'), {
            type: 'words',
        });
        tl.add('start', 0);
        mm.add('(min-width: 769px)', () => {
            ScrollTrigger.create({
                trigger: '#pricing',
                start: 'top 80%',
                end: '50% 55%',
                markers: false,
                scrub: true,
                once: true,
                animation: tl,
            });
            tl.fromTo(
                headerRef.current!.querySelector('.small-badge'),
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1 }
                // "start"
            )
                .fromTo(
                    split1.words,
                    { y: 150 },
                    { y: 0, stagger: 0.1 }
                    // "start+=.3"
                )
                .fromTo(
                    split2.words,
                    { opacity: 0 },
                    { opacity: 1, stagger: 0.05 }
                    // "start+=0.5"
                )
                .fromTo(
                    cardsRef.current!.querySelectorAll('.card'),
                    {
                        y: 200,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        // duration: 2,
                    }
                    // "start+=.3"
                )
                .fromTo(
                    gsap.utils.toArray(cardsRef.current!.querySelectorAll('.card .price .price-number.to')), // select the price element
                    {
                        innerText: 0,
                    },
                    {
                        innerText: (i: number) => cards[i].price?.to,
                        roundProps: 'innerText',
                        ease: 'none',
                        duration: 1,
                        stagger: 0.2,
                    }
                    // "start+=.35"
                )
                .fromTo(
                    gsap.utils.toArray(cardsRef.current!.querySelectorAll('.card .price .price-number.from')), // select the price element
                    {
                        innerText: 0,
                    },
                    {
                        innerText: (i: number) => cards[i].price?.from,
                        roundProps: 'innerText', // round to the nearest integer
                        ease: 'none', // linear animation
                        duration: 1, // duration of the animation
                        stagger: 0.2, // stagger the animation
                    }
                    // "start+=1.5"
                );
        });
        mm.add('(max-width: 768px)', () => {
            ScrollTrigger.create({
                trigger: '#pricing',
                start: 'top 80%',
                end: '20% 80%',
                markers: false,
                scrub: true,
                once: true,
                animation: tl,
            });

            tl.fromTo(
                headerRef.current!.querySelector('.small-badge'),
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1 }
                // "start"
            )
                .fromTo(
                    split1.words,
                    { y: 150 },
                    { y: 0, stagger: 0.1 }
                    // "start+=.3"
                )
                .fromTo(
                    split2.words,
                    { opacity: 0 },
                    { opacity: 1, stagger: 0.05 }
                    // "start+=0.5"
                );
            cardsRef.current?.querySelectorAll('.card').forEach((card, index) => {
                const cTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 70%',
                        end: 'center 70%',
                        markers: false,
                        scrub: true,
                        once: true,
                    },
                    defaults: {
                        ease: 'power4.out',
                    },
                });
                cTl.fromTo(
                    card,
                    {
                        y: 200,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        ease: 'power4.out',
                        duration: 1,
                        opacity: 1,
                    }
                )
                    .fromTo(
                        card.querySelector('.price .price-number.to'),
                        {
                            innerText: 0,
                        },
                        {
                            innerText: () => cards[index].price?.to,
                            roundProps: 'innerText',
                            ease: 'none',
                            duration: 1,
                        },
                        '+=.3'
                    )
                    .fromTo(
                        card.querySelector('.price .price-number.from'),
                        {
                            innerText: 0,
                        },
                        {
                            innerText: () => cards[index].price?.from,
                            roundProps: 'innerText',
                            ease: 'none',
                            duration: 1,
                        },
                        '+=.6'
                    );
            });
        });
    });

    return (
        <>
            <BGGRid images={grids} />
            <BGAnimatedLines />
            <div className="highlight highlight-red"></div>
            <div ref={headerRef} className="header">
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
            <div ref={cardsRef} className="cards">
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
                                <div className="red-arr-wrapper">
                                    <img src={arrRight} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <Pricing />);
    });
}
