import {hydrateRoot, useRef, useState} from "@wordpress/element";
import {Hero} from "./Hero";
import {useGSAP} from "@gsap/react";
import {gsap} from "./gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CustomEase} from "gsap/all";
import {SplitText} from "gsap/SplitText";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-hero');

const HeroInteractive = () => {
    const headerRef = useRef<HTMLDivElement>();
    const videoRef = useRef<HTMLVideoElement>();
    const videoWrapperRef = useRef<HTMLDivElement>();
    const [videoState, setVideoState] = useState(false);

    const Gsap = gsap;

    const tl = Gsap.timeline();

    Gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

    Gsap.defaults({
        ease: CustomEase.create("custom", "M0,0 C0.7,0.002 0.31,1.004 1,1 "),
        duration: 1,
    });

    useGSAP(() => {
        let split1: SplitText | null = null,
            split2: SplitText | null = null;
        if (headerRef.current) {

            split1 = new SplitText(headerRef.current?.querySelectorAll("h1 span"), {
                type: "words",
            });
            split2 = new SplitText(headerRef.current?.querySelector("p"), {
                type: "words",
            });
            tl.then(() => {
                split1?.revert();
                split2?.revert();
                headerRef.current
                    ?.querySelectorAll("h1 span")
                    .forEach(
                        (span) => ((span as HTMLElement).style.overflow = "visible")
                    );
            });
            tl.add("start", 0);
            tl.fromTo(
                headerRef.current.querySelector(".badge"),
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
                    headerRef.current.querySelector(".but"),
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                    },
                    "start+=1.5"
                )
                .fromTo(
                    videoWrapperRef.current,
                    { opacity: 0 },
                    { opacity: 1 },
                    "start+=1.5"
                )
                .fromTo(
                    videoWrapperRef.current,
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
    }, []);

    return (
        <Hero videoState={videoState} setVideoState={setVideoState} videoRef={videoRef} videoWrapperRef={videoWrapperRef} headerRef={headerRef} />
    );

}


if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <HeroInteractive />)
    })
}