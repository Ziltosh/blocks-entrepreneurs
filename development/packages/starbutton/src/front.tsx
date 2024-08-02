import {hydrateRoot} from "@wordpress/element";
import React from "react";


const elements = document.querySelectorAll('.wp-block-entrepreneurs-starbutton');

const StarButton = ({text}) => {

    return (
        <>test</>
        // <div className="but star-but">
        //     <span>{text}</span>
        //     {/*<img className="star-1" src={star1} alt=""/>*/}
        //     {/*<img className="star-2" src={star2} alt=""/>*/}
        //     {/*<img className="star-3" src={star2} alt=""/>*/}
        // </div>
    )
}

if (elements.length) {
    elements.forEach((element) => {
        const attributes = JSON.parse(element.getAttribute('data-attributes'));
        hydrateRoot(element, <StarButton {...attributes}/>);
    });
}