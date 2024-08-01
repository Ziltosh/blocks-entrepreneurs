import {useBlockProps} from "@wordpress/block-editor";

import gridDesktop1 from "../src/img/svg/sections-grids/hero/bg-grid-1920-1.svg";
import gridDesktop2 from "../src/img/svg/sections-grids/hero/bg-grid-1920-2.svg";
import gridLaptop1 from "../src/img/svg/sections-grids/hero/bg-grid-1280-1.svg";
import gridLaptop2 from "../src/img/svg/sections-grids/hero/bg-grid-1280-2.svg";
import gridTablet1 from "../src/img/svg/sections-grids/hero/bg-grid-768-1.svg";
import gridTablet2 from "../src/img/svg/sections-grids/hero/bg-grid-768-2.svg";
import gridMobile1 from "../src/img/svg/sections-grids/hero/bg-grid-375.svg";


import {useRef, useState} from "@wordpress/element";
import BGGRid from "./BGGrid";
import play from "./img/svg/play.svg";
import {BGAnimatedLines} from "./BgAnimatedLines";
import {HeroGraph} from "./HeroGraph";
import {DoubleButton} from "./DoubleButton";


export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();
    const grids1 = [gridDesktop1, gridLaptop1, gridTablet1, gridMobile1];
    const grids2 = [gridDesktop2, gridLaptop2, gridTablet2];

    const headerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoWrapperRef = useRef<HTMLDivElement>(null)

    const [videoState, setVideoState] = useState(false);

    const handleVideoState = () => {
        if (videoRef.current?.paused) {
            setVideoState(true);
            videoRef.current.play();
        } else {
            setVideoState(false);
            videoRef.current?.pause();
        }
    };

    return (
        <div {...blockProps} id="hero">
            <div className="highlight-wrapper">
                <div className="bg-gradient bg-gradient-1"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1608"
                    height="1080"
                    viewBox="0 0 1608 1080"
                    fill="none"
                >

                    <g opacity="0.1" filter="url(#filter0_f_177_2416)">
                        <path
                            d="M180 900L682.857 0H927.429L1428 900H180Z"
                            fill="url(#paint0_linear_177_2416)"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_177_2416"
                            x="0"
                            y="-180"
                            width="1608"
                            height="1260"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="90"
                                result="effect1_foregroundBlur_177_2416"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_177_2416"
                            x1="804.286"
                            y1="-2.71092e-06"
                            x2="804.286"
                            y2="954.173"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#EE0000" stopOpacity="0.42"/>
                            <stop offset="0.493857" stopColor="#EE0000" stopOpacity="0.68"/>
                            <stop offset="1" stopColor="#EE0000" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
                <BGGRid images={grids1}/>
                <BGAnimatedLines/>
            </div>
            <div className="header" ref={headerRef}>
                <div className="badge">
                    Nous avons accompagné + 10 500 entrepreneurs dans des centaines de niches différentes
                    (autant de business physique que en ligne)
                </div>
                <h1 className="section-title">
                    <span>L’unique programme d’accompagnement à avoir généré</span>
                    <span>plus de 300 Millions d’Euros pour ses clients ces 7 dernières années en Francophonie</span>
                </h1>
                <p>Découvrez en un apercu dans cette vidéo</p>
                {/*<DoubleButton text={"En savoir plus"} disableAnimation={false} />*/}
            </div>
            <div className="video-wrapper" ref={videoWrapperRef}>
                <video
                    ref={videoRef}
                    src={"wp-content/themes/theme-entrepreneurs/src/mp4/video.mp4"}
                    poster="wp-content/themes/theme-entrepreneurs/src/img/thumbnail.png"
                    loop
                    muted
                    onClick={() => handleVideoState()}
                ></video>
                <div
                    className={`play-but ${videoState && "active"}`}
                    onClick={() => handleVideoState()}
                >
                    <img alt={"bouton play"} src={play}/>
                </div>
            </div>
            {/*<ClientLogos/>*/}
            <div className="graph">
                <div className="highlight highlight-red"></div>
                <BGGRid images={grids2}/>
                <div className="text-quote">
                    Découvrez Le Programme Scaling : Passez d’un entrepreneur dans l’opérationnel, qui réalise 15K à 80K de C.A mensuel, à un chef d’entreprise qui dépasse la barre des 100K / mois en travaillant sur son business
                </div>
                {/*<p>Découvrez Le Programme Scaling : Passez d’un entrepreneur dans l’opérationnel, qui réalise 15K à 80K de C.A mensuel, à un chef d’entreprise qui dépasse la barre des 100K / mois en travaillant sur son business </p>*/}
                <HeroGraph/>
                <DoubleButton text={"En savoir plus sur ce programme"} disableAnimation={false}/>
                <BGAnimatedLines/>
            </div>
        </div>
    );
}

