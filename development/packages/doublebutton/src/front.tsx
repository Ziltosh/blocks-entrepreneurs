import DoubleButton from "./DoubleButton";
import {hydrateRoot, useEffect, useRef, useState} from "@wordpress/element";
import {gsap} from "./gsap";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-doublebutton');

const DoubleButtonInteractive = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onMouseOver = () => {
        tl.play()
    }

    const onMouseLeave = () => {
        tl.reverse()
    }

    const tl = gsap.timeline({paused: true});

    const [animationState, setAnimationState] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setAnimationState(true);
        }
    }, []);
    useEffect(() => {
        if (buttonRef.current && !animationState) {
            tl.add("start", 0);
            tl.to(
                buttonRef.current.querySelector("span"),
                {
                    flex: "1 1 1",
                },
                "start"
            ).to(
                buttonRef.current,
                {
                    width: " 19.1875rem",
                    height: "3.5rem",
                    paddingTop: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "1.5rem",
                },
                "start+=0.25"
            );
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768 && animationState) {
                setAnimationState(false);
            } else if (window.innerWidth < 768 && !animationState) {
                setAnimationState(true);
            }
        });
        return () => {
            tl.kill();
            window.removeEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    setAnimationState(false);
                } else {
                    setAnimationState(true);
                }
            });
        };
    }, [tl, animationState]);

    return (
        <DoubleButton onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} animationState={true} text={"En savoir plus"} buttonRef={buttonRef} />
    )
}



if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <DoubleButtonInteractive />)
    })
}