import storeDevice from "./store";
import {useEffect, useState} from "@wordpress/element";

import benefitGraph1 from "./Lotties/SECOND GRAPH/1920.json";
import benefitGraph2 from "./Lotties/SECOND GRAPH/1280.json";
import benefitGraph3 from "./Lotties/SECOND GRAPH/768.json";
import benefitGraph4 from "./Lotties/SECOND GRAPH/375.json";
import {useLottie, useLottieInteractivity} from "lottie-react";

export const BenefitGraph = () => {
    const { device } = storeDevice();
    const [animation, setAnimation] = useState(
        device === "desktop"
            ? benefitGraph1
            : device === "laptop"
                ? benefitGraph2
                : device === "tablet"
                    ? benefitGraph3
                    : benefitGraph4
    );
    useEffect(() => {
        setAnimation(
            device === "desktop"
                ? benefitGraph1
                : device === "laptop"
                    ? benefitGraph2
                    : device === "tablet"
                        ? benefitGraph3
                        : benefitGraph4
        );
    }, [device]);
    const lottieObj = useLottie({
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animation,
        className: "benefit-2-graph",
    });
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.4],
                frames: [0, 200],
                type: "seek",
            },
        ],
    });
    return Animation;
};