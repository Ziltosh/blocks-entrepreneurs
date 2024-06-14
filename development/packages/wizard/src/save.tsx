import {useBlockProps} from "@wordpress/block-editor";

import {items} from "./items";
import React from "react";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} id="wizard" ref={null}>
            {/*<BGGRid images={grids}/>*/}
            {/*<BGAnimatedLines/>*/}
            <div className="highlight highlight-red"></div>
            <h1 ref={null} className="section-title">
        <span>
          Ce que vous obtiendrez <br/>
          en décidant de franchir le pas
        </span>

                <span>avec Entrepreneurs.com</span>
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

            </div>
        </div>
    );
}
