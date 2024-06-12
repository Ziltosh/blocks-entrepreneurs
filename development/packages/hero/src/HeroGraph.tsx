import storeDevice from "./store";
import {useEffect, useState} from "@wordpress/element";
import {useLottie, useLottieInteractivity} from "lottie-react";

import heroGraph1 from "./Lotties/HERO GRAPH/1920.json";
import heroGraph2 from "./Lotties/HERO GRAPH/1280.json";
import heroGraph3 from "./Lotties/HERO GRAPH/768.json";
import heroGraph4 from "./Lotties/HERO GRAPH/375.json";

export const HeroGraph = () => {
    const { device } = storeDevice();
    const [animation, setAnimation] = useState(
        device === "desktop"
            ? heroGraph1
            : device === "laptop"
                ? heroGraph2
                : device === "tablet"
                    ? heroGraph3
                    : heroGraph4
    );
    useEffect(() => {
        setAnimation(
            device === "desktop"
                ? heroGraph1
                : device === "laptop"
                    ? heroGraph2
                    : device === "tablet"
                        ? heroGraph3
                        : heroGraph4
        );
    }, [device]);
    const lottieObj = useLottie({
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animation,
        className: "hero-graph",
    });

    return useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0.2, 0.6],
                frames: [0, 400],
                type: "seek",
            },
        ],
    });
};