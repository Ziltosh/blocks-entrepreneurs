import {hydrateRoot, useRef} from "@wordpress/element";

import BGGRid from "./BGGrid";
import {BGAnimatedLines} from "./BgAnimatedLines";

import gridDesktop from "./img/section-grids/wizard/bg-grid-1920.svg";
import gridLaptop from "./img/section-grids/wizard/bg-grid-1280.svg";
import gridTablet from "./img/section-grids/wizard/bg-grid-768.svg";
import gridMobile from "./img/section-grids/wizard/bg-grid-375.svg";
import {items} from "./items";
import React from "react";
import WizardItem from "./WizardItem";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-wizard');

const Wizard = () => {
    const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];
    const headerRef = useRef<HTMLDivElement>(null);
    const wizardRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <BGGRid images={grids}/>
            <BGAnimatedLines/>
            <div className="highlight highlight-red"></div>
            <h1 ref={headerRef} className="section-title">
        <span>
          Ce que vous serez certain d’obtenir en nous rejoignant
        </span>
                <span>(valable pour les business en ligne ET physiques)</span>
            </h1>
            <div className="items-wrapper">
                <div className="numbers-line">
                    {items.map((_, index) => (
                        <React.Fragment key={index}>
                            <div key={index} className="number">
                                <span>{index + 1}</span>
                            </div>
                            {index !== items.length - 1 && <div className="line"></div>}
                        </React.Fragment>
                    ))}
                </div>
                {items.map((item, index) => (
                    <WizardItem key={index} item={item} index={index}/>
                ))}
            </div>
        </>
    )
}

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <Wizard/>);
    });
}