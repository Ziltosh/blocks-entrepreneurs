import {useBlockProps} from "@wordpress/block-editor";

import "./editor-style.css";
import BGGRid from "./BGGrid";
import {BGAnimatedLines} from "./BgAnimatedLines";

import gridDesktop from "./img/section-grids/faq/bg-grid-1920.svg";
import gridLaptop from "./img/section-grids/faq/bg-grid-1280.svg";
import gridTablet from "./img/section-grids/faq/bg-grid-768.svg";
import gridMobile from "./img/section-grids/faq/bg-grid-375.svg";
import {faqs, FAQType} from "./faqs";
import plus from "./img/plus.svg";
import {useEffect, useRef, useState} from "@wordpress/element";
import {gsap} from "./gsap";


export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();
    const answerRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };


    const grids = [gridDesktop, gridLaptop, gridTablet, gridMobile];

    return (
        <div {...blockProps} key={"render"} id="faq">
            <BGGRid images={grids}/>
            <BGAnimatedLines/>
            <div className="highlight highlight-red"></div>
            <h1 className="section-title">
                <span>Questions</span>
                <span>Fréquentes</span>
            </h1>
            <div className="faqs-wrapper">
                {faqs.map((faq, index) => (
                    <FAQItem faq={faq} index={index} key={index}/>
                ))}
            </div>
        </div>
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
        <div className="faq-item">
      <span className="index">
        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
      </span>
            <div
                className="faq"
                ref={faqRef}
                onClick={() => toggleAnswerVisibility()}
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
