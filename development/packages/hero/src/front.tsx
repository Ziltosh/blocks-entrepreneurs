import {hydrateRoot, useRef} from "@wordpress/element";
import {Hero} from "./Hero";
import {useGSAP} from "@gsap/react";
import {gsap} from "./gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CustomEase} from "gsap/all";
import {SplitText} from "gsap/SplitText";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-hero');

const HeroInteractive = () => {
    console.log('frontend', new Date().getSeconds())

    const header = useRef<HTMLDivElement>(null);
    const videoWrapper = useRef<HTMLDivElement>(null);

    const Gsap = gsap;

    Gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

    Gsap.defaults({
        ease: CustomEase.create("custom", "M0,0 C0.7,0.002 0.31,1.004 1,1 "),
        duration: 1,
    });

    useGSAP(() => {
        const tl = gsap.timeline();
        let split1: SplitText | null = null,
            split2: SplitText | null = null;
        if (header.current) {
            split1 = new SplitText(header.current?.querySelectorAll("h1 span"), {
                type: "words",
            });
            split2 = new SplitText(header.current?.querySelector("p"), {
                type: "words",
            });
            tl.then(() => {
                split1?.revert();
                split2?.revert();
                header.current
                    ?.querySelectorAll("h1 span")
                    .forEach(
                        (span) => ((span as HTMLElement).style.overflow = "visible")
                    );
            });
            tl.add("start", 0);
            tl.fromTo(
                header.current.querySelector(".badge"),
                {
                    opacity: 0,
                },
                { opacity: 1, duration: 1 },
                "start+=.25"
            )
                .fromTo(
                    split1.words,
                    {
                        y: 100,
                        z: -250,
                    },
                    {
                        y: 0,
                        z: 0,
                        stagger: 0.2,
                    },
                    "start"
                )
                .fromTo(
                    split2.words,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        stagger: 0.05,
                    },
                    "start+=1.5"
                )
                .fromTo(
                    header.current.querySelector(".but"),
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                    },
                    "start+=1.5"
                )
                .fromTo(
                    videoWrapper.current,
                    { opacity: 0 },
                    { opacity: 1 },
                    "start+=1.5"
                )
                .fromTo(
                    videoWrapper.current,
                    {
                        y: 100,
                        z: -150,
                    },
                    {
                        y: 0,
                        z: 0,
                    },
                    "start+=1.75"
                );
        }
    });

    return (
        <Hero videoState={true} />
    );
}


if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <HeroInteractive/>)
    })
}