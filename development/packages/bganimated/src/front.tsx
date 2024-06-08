import {hydrateRoot} from "@wordpress/element";
import Lottie from "lottie-react";
import bgLines1 from "./Lotties/BACKGROUND LINES/1920.json";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-bganimated');

const BgAnimated = () => {
    return (
        <Lottie animationData={bgLines1} className="bg-animated-grid" />
    )
}

if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <BgAnimated/>)
    })
}