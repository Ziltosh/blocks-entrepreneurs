import {hydrateRoot, useEffect, useRef, useState} from "@wordpress/element";
import React from "react";
import redArrow from "./img/red-bg-rarrow.svg";
import {gsap} from "./gsap";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-doublebutton');

const DoubleButton = ({text, size}) => {

    const but = useRef<HTMLButtonElement>(null);
    const tl = gsap.timeline({paused: true});
    const [animationState, setAnimationState] = useState(false);
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
                    width: ' 20.1875rem',
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
            onMouseLeave={() => tl.reverse()}
            style={{
                maxWidth: size,
            }}
        >
            <span>{text}</span>
            <img src={redArrow} alt=""/>
            {/* <RedArrRight /> */}
        </button>
    )
}

if (elements.length) {
    elements.forEach((element) => {
        const attributes = JSON.parse(element.getAttribute('data-attributes'));
        hydrateRoot(element, <DoubleButton {...attributes}/>);
    });
}