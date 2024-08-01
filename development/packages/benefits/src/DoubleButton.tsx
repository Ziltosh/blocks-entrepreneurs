import {useEffect, useRef, useState} from "@wordpress/element";
import {gsap} from "./gsap";

import redArrow from "./img/svg/red-bg-rarrow.svg";


export const DoubleButton = ({disableAnimation, text}) => {
    const but = useRef<HTMLButtonElement>(null);
    const tl = gsap.timeline({paused: true});
    const [animationState, setAnimationState] = useState(disableAnimation);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setAnimationState(true);
        }
    }, []);
    useEffect(() => {
        if (but.current && !animationState) {
            tl.add('start', 0);
            tl.to(
                but.current.querySelector('span'),
                {
                    flex: '1 1 1',
                },
                'start'
            ).to(
                but.current,
                {
                    width: ' 26.1875rem',
                    height: '3.5rem',
                    paddingTop: '0.5rem',
                    paddingRight: '0.5rem',
                    paddingBottom: '0.5rem',
                    paddingLeft: '1.5rem',
                },
                'start+=0.25'
            );
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && animationState) {
                setAnimationState(false);
            } else if (window.innerWidth < 768 && !animationState) {
                setAnimationState(true);
            }
        });
        return () => {
            tl.kill();
            window.removeEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    setAnimationState(false);
                } else {
                    setAnimationState(true);
                }
            });
        };
    }, [tl, animationState]);

    return (
        <button
            ref={but}
            className={`but double-border ${animationState ? 'no-anim' : ''}`}
            onMouseOver={() => tl.play()}
            style={{
                margin: 'auto'
            }}
            onMouseLeave={() => tl.reverse()}
        >
            <span>{text}</span>
            <img src={redArrow} alt=""/>
            {/* <RedArrRight /> */}
        </button>
    );
}