import {hydrateRoot, useEffect, useRef, useState} from "@wordpress/element";
import React from "react";
import BGGRid from "./BGGrid";
import {BGAnimatedLines} from "./BgAnimatedLines";
import {faqs, FAQType} from "./faqs";
import gridDesktop from "./img/section-grids/faq/bg-grid-1920.svg";
import gridLaptop from "./img/section-grids/faq/bg-grid-1280.svg";
import gridTablet from "./img/section-grids/faq/bg-grid-768.svg";
import gridMobile from "./img/section-grids/faq/bg-grid-375.svg";
import plus from "./img/plus.svg";
import {gsap} from "./gsap";


const elements = document.querySelectorAll('.wp-block-entrepreneurs-faq');

const FAQ = () => {
    const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];
    const answerRef = useRef<HTMLDivElement>(null);

    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: 0.5,
            },
        });
        if (isAnswerVisible) {
            tl.to(answerRef.current, {
                autoAlpha: 0.6,
                maxHeight: "200px",
                paddingTop: ".625rem",
            });
        } else {
            tl.to(answerRef.current, {
                autoAlpha: 0,
                maxHeight: "0px",
                paddingTop: "0rem",
            });
        }
    }, [isAnswerVisible]);

    return (
        <>
            <BGGRid images={grids}/>
            <BGAnimatedLines/>
            <div className="highlight highlight-red"></div>
            <h1 className="section-title">
                <span>Questions</span>
                <span>Fréquentes</span>
            </h1>
            <div className="faqs-wrapper">
                {faqs.map((faq, index) => (
                    <FAQItem faq={faq} index={index}/>
                ))}
            </div>
        </>
    )
}

function FAQItem({ faq, index }: { faq: FAQType; index: number }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
    const answerRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: 0.5,
            },
        });
        if (isAnswerVisible) {
            tl.to(answerRef.current, {
                autoAlpha: 0.6,
                maxHeight: "200px",
                paddingTop: ".625rem",
            });
        } else {
            tl.to(answerRef.current, {
                autoAlpha: 0,
                maxHeight: "0px",
                paddingTop: "0rem",
            });
        }
    }, [isAnswerVisible]);

    return (
        <div className="faq-item" ref={faqRef}
             onClick={() => toggleAnswerVisibility()}>
      <span className="index">
        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
      </span>
            <div
                className="faq"
            >
                <div className="question">{faq.question}</div>
                <div className="answer" ref={answerRef} style={{ maxHeight: "0px" }}>
                    {faq.answer}
                </div>
            </div>
            <img src={plus} alt="" />
        </div>
    );
}

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <FAQ/>);
    });
}