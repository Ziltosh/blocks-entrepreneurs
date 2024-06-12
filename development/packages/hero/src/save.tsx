import {useBlockProps} from "@wordpress/block-editor";

import gridDesktop1 from "../src/img/svg/sections-grids/hero/bg-grid-1920-1.svg";
import gridDesktop2 from "../src/img/svg/sections-grids/hero/bg-grid-1920-2.svg";
import gridLaptop1 from "../src/img/svg/sections-grids/hero/bg-grid-1280-1.svg";
import gridLaptop2 from "../src/img/svg/sections-grids/hero/bg-grid-1280-2.svg";
import gridTablet1 from "../src/img/svg/sections-grids/hero/bg-grid-768-1.svg";
import gridTablet2 from "../src/img/svg/sections-grids/hero/bg-grid-768-2.svg";
import gridMobile1 from "../src/img/svg/sections-grids/hero/bg-grid-375.svg";

import BGGRid from "./BGGrid";
import play from "./img/svg/play.svg";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    const grids1 = [gridDesktop1, gridLaptop1, gridTablet1, gridMobile1];
    const grids2 = [gridDesktop2, gridLaptop2, gridTablet2];

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
                {/*<BGAnimatedLines/>*/}
            </div>
            <div className="header" ref={null}>
                <div className="badge">
                    +10 000 entrepreneurs francophones ont vu leurs vies transformées
                </div>
                <h1 className="section-title">
                    <span>Propulsez l&apos;Entrepreneur que</span>
                    <span>vous êtes à un niveau supérieur</span>
                </h1>
                <p>oeuvrez sereinement vers l&apos;accomplissement de votre mission.</p>
                {/*<DoubleButton text={"En savoir plus"} disableAnimation={false} />*/}
            </div>
            <div className="video-wrapper" ref={null}>
                <video
                    ref={null}
                    src={"/wp-content/themes/theme-entrepreneurs/src/mp4/video.mp4"}
                    poster="/wp-content/themes/theme-entrepreneurs/src/img/thumbnail.png"
                    loop
                    muted
                    onClick={null}
                ></video>
                <div
                    className={`play-but`}
                    onClick={null}
                >
                    <img alt={"bouton play"} src={play}/>
                </div>
            </div>
            {/*<ClientLogos/>*/}
            <div className="graph">
                <div className="highlight highlight-red"></div>
                <BGGRid images={grids2}/>
                <div className="text-quote">
                    Êtes-vous prêt à transformer radicalement votre quotidien et votre vie
                    en l&apos;espace de quelques mois,
                    <br/>
                    en adoptant une stratégie globale pour votre business plutôt que de
                    vous limiter à sa gestion quotidienne ?
                </div>
                {/*<HeroGraph/>*/}
                {/*<BGAnimatedLines/>*/}
            </div>
        </div>
    );

}
