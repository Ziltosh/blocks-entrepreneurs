import {useBlockProps} from "@wordpress/block-editor";

import gridDesktop from "./img/benefit/bg-grid-1920.svg";
import gridLaptop from "./img/benefit/bg-grid-1280.svg";
import gridTablet from "./img/benefit/bg-grid-768.svg";
import gridMobile from "./img/benefit/bg-grid-375.svg";
import arrRight from "./img/arrow-right.svg";


import "./editor-style.css";
import BGGRid from "./BGGrid";
import {useRef} from "@wordpress/element";
import {BenefitGraph} from "./BenefitGraph";

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockProps = useBlockProps();

	const headerRef = useRef<HTMLDivElement>()
	const buttonsRef = useRef<HTMLDivElement>()

	const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];

	return (
		<div key={"render"} {...blockProps} id="benefit2">
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
		</div>
	)
}
