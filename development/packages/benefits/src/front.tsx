import {useGSAP} from '@gsap/react';
import {hydrateRoot, useRef} from '@wordpress/element';
import Lottie from 'lottie-react';
import letter from './Lotties/E.json';
import {gsap, SplitText} from './gsap';

import Icon1 from './img/Icon-4.png';
import Icon2 from './img/Icon-5.png';
import Icon3 from './img/Icon-6.png';

const elements = document.querySelectorAll('.wp-block-entrepreneurs-benefits');

export const Benefits = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!headerRef.current || !cardsRef.current) return;

        const split1 = new SplitText(headerRef.current?.querySelectorAll('h1 span'), {
            type: 'words',
        });
        const split2 = new SplitText(headerRef.current?.querySelector('p'), {
            type: 'words',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#benefits',
                scrub: true,
                markers: false,
                start: 'top 70%',
                end: '80% 80%',
                once: true,
            },
            onComplete: () => {
                split1.revert();
                split2.revert();
            },
        });
        const cardSplits = Array.from(cardsRef.current?.querySelectorAll('.card h2')).map((el) => {
            const split = new SplitText(el, {
                type: 'words',
            });
            return split;
        });

        tl.add('start', 0);
        tl.fromTo(
            headerRef.current.querySelector('.small-badge'),
            { y: 150, opacity: 0 },
            { y: 0, opacity: 1 },
            'start'
        )
            .fromTo(split1.words, { y: 150 }, { y: 0, stagger: 0.1 }, 'start+=.25')
            .fromTo(split2.words, { opacity: 0 }, { opacity: 1, stagger: 0.05 }, 'start+=0.5')
            .fromTo(
                gsap.utils.toArray(cardsRef.current?.querySelectorAll('.card img')),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    stagger: 0.5,
                    duration: 0.75,
                },
                'start+=3.5'
            )
            .fromTo(
                cardsRef.current.querySelectorAll('.card .border-line'),
                {
                    width: '0%',
                },
                {
                    width: '100%',
                    duration: 0.75,
                    stagger: 0.5,
                },
                'start+=3.5'
            )
            .fromTo(
                gsap.utils.toArray(cardsRef.current?.querySelectorAll('.card img')),
                {
                    rotateY: 90,
                    translateX: -60,
                },
                {
                    rotateY: 0,
                    translateX: 0,
                    stagger: 0.5,
                    // duration: 0.5,
                },
                'start+=3.5'
            )
            .fromTo(
                cardSplits.map((split) => split.words),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                },
                'start+=3.5'
            );
    });

    return (
        <>
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
        </>
    );
};

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <Benefits />);
    });
}
