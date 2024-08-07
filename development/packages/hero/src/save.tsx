import {useBlockProps} from "@wordpress/block-editor";
import play from "./img/svg/play.svg";
import {texts} from "./texts";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

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
                {/*<BGGRid images={grids1}/>*/}
                {/*<BGAnimatedLines/>*/}
            </div>
            <div className="header" ref={null}>
                <div className="badge">
                    {texts.text1}
                </div>
                <h1 className="section-title">
                    <span>{texts.text2_1}</span>
                    <span>{texts.text2_2}</span>
                </h1>
                <p>Découvrez en un apercu dans cette vidéo</p>
                {/*<DoubleButton text={texts.btn1} disableAnimation={false}/>*/}
            </div>
            <div className="video-wrapper" ref={null}>
                <video
                    ref={null}
                    src={"wp-content/themes/theme-entrepreneurs/src/mp4/video.mp4"}
                    poster="wp-content/themes/theme-entrepreneurs/src/img/thumbnail.png"
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
                {/*<BGGRid images={grids2}/>*/}
                <div className="text-quote">
                    {texts.text3}
                </div>
                {/*<HeroGraph/>*/}
                {/*<BGAnimatedLines/>*/}
            </div>
        </div>
    );

}
