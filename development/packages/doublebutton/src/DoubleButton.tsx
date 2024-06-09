import redArrow from "./red-bg-rarrow.svg";
import {gsap} from "./gsap";

export default function DoubleButton({
                                         text,
                                         buttonRef,
                                         disableAnimation = false,
                                         animationState = false,
                                         onMouseOver,
                                         onMouseLeave
                                     }: {
    text: string;
    buttonRef?: React.RefObject<HTMLButtonElement>;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    animationState?: boolean;
    disableAnimation?: boolean;
}) {

    const tl = gsap.timeline({paused: true});

    return (
        <button
            ref={buttonRef}
            className={`but double-border ${animationState ? "no-anim" : ""}`}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <span>{text}</span>
            <img src={redArrow} alt=""/>
            {/* <RedArrRight /> */}
        </button>
    );
}