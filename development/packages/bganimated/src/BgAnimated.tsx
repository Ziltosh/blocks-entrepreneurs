import Lottie from "lottie-react";
import bgLines1 from "./Lotties/BACKGROUND LINES/1920.json";

export const BGAnimatedLines = () => {
    // const { device } = storeDevice();
    // const [animation, setAnimation] = useState(
    //     device === "desktop"
    //         ? bgLines1
    //         : device === "laptop"
    //             ? bgLines2
    //             : device === "tablet"
    //                 ? bgLines3
    //                 : bgLines4
    // );
    // useEffect(() => {
    //     setAnimation(
    //         device === "desktop"
    //             ? bgLines1
    //             : device === "laptop"
    //                 ? bgLines2
    //                 : device === "tablet"
    //                     ? bgLines3
    //                     : bgLines4
    //     );
    //     console.log(device);
    // }, [device]);

    return <Lottie animationData={bgLines1} className="bg-animated-grid" />;
};