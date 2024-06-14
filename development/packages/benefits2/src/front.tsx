import {hydrateRoot, useRef} from "@wordpress/element";
import BGGRid from "./BGGrid";
import arrRight from "./img/arrow-right.svg";
import {BenefitGraph} from "./BenefitGraph";

import gridDesktop from "./img/benefit/bg-grid-1920.svg";
import gridLaptop from "./img/benefit/bg-grid-1280.svg";
import gridTablet from "./img/benefit/bg-grid-768.svg";
import gridMobile from "./img/benefit/bg-grid-375.svg";


const elements = document.querySelectorAll('.wp-block-entrepreneurs-benefits2');

const Benefits2 = () => {

    const headerRef = useRef<HTMLDivElement>()
    const buttonsRef = useRef<HTMLDivElement>()

    const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];

    return (
        <>
            <BGGRid images={grids}/>
            <div ref={headerRef} className="header">
                <div className="small-badge">Nos programmes</div>
                <h1 className="section-title">
                    <span>
                    L&apos;impact d&apos;Entrepreneurs.com
                    <br/> sur la vie de milliers{" "}
                    </span>
                    <span>d&apos;entrepreneurs en un graphique.</span>
                </h1>
            </div>
            <div className="body">
                <div ref={buttonsRef} className="buttons">
                    <div className="but star-but">
                        <span>Voir le témoignage de Khadija</span>
                    </div>
                    <div className="but empty-but">
                        <span>Réserver un Appel</span>
                        <img src={arrRight} alt=""/>
                    </div>
                </div>
                <BenefitGraph/>
            </div>
        </>
    )
}

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <Benefits2/>);
    });
}