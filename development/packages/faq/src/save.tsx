import {useBlockProps} from "@wordpress/block-editor";
import {faqs, FAQType} from "./faqs";
import plus from "./img/plus.svg";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} key={"render"} id="faq">
            {/*<BGGRid images={grids}/>*/}
            {/*<BGAnimatedLines/>*/}
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
        </div>
    )
}

function FAQItem({ faq, index }: { faq: FAQType; index: number }) {
    return (
        <div className="faq-item">
      <span className="index">
        {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
      </span>
            <div
                className="faq"
                ref={null}
                onClick={null}
            >
                <div className="question">{faq.question}</div>
                <div className="answer" ref={null} style={{ maxHeight: "0px" }}>
                    {faq.answer}
                </div>
            </div>
            <img src={plus} alt="" />
        </div>
    );
}
