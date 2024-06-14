import Lottie from "lottie-react";
import bgLines1 from "./Lotties/BACKGROUND LINES/1920.json";
import bgLines2 from "./Lotties/BACKGROUND LINES/1280.json";
import bgLines3 from "./Lotties/BACKGROUND LINES/768.json";
import bgLines4 from "./Lotties/BACKGROUND LINES/375.json";

import storeDevice from "./store";
import {useEffect, useState} from "@wordpress/element";

export const BGAnimatedLines = () => {
    const { device } = storeDevice();
    const [animation, setAnimation] = useState(
        device === "desktop"
            ? bgLines1
            : device === "laptop"
                ? bgLines2
                : device === "tablet"
                    ? bgLines3
                    : bgLines4
    );
    useEffect(() => {
        setAnimation(
            device === "desktop"
                ? bgLines1
                : device === "laptop"
                    ? bgLines2
                    : device === "tablet"
                        ? bgLines3
                        : bgLines4
        );
        console.log(device);
    }, [device]);

    return <Lottie animationData={bgLines1} className="bg-animated-grid" />;
};