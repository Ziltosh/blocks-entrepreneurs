import {InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {PanelBody, TextControl} from "@wordpress/components";

import "./editor-style.css";
import {useEffect, useRef, useState} from "@wordpress/element";
import {gsap} from "./gsap";
import redArrow from "./img/red-bg-rarrow.svg";

export default function Edit({attributes, setAttributes, isSelected}) {
    const blockProps = useBlockProps();

    const handleChangeText = (text) => {
        setAttributes({text});
    }

    const handleChangeSize = (size) => {
        setAttributes({size});
    }

    const but = useRef<HTMLButtonElement>(null);
    const tl = gsap.timeline({paused: true});
    const [animationState, setAnimationState] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setAnimationState(true);
        }
    }, []);
    useEffect(() => {
        if (but.current && !animationState) {
            tl.add('start', 0);
            tl.to(
                but.current.querySelector('span'),
                {
                    flex: '1 1 1',
                },
                'start'
            ).to(
                but.current,
                {
                    width: ' 20.1875rem',
                    height: '3.5rem',
                    paddingTop: '0.5rem',
                    paddingRight: '0.5rem',
                    paddingBottom: '0.5rem',
                    paddingLeft: '1.5rem',
                },
                'start+=0.25'
            );
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && animationState) {
                setAnimationState(false);
            } else if (window.innerWidth < 768 && !animationState) {
                setAnimationState(true);
            }
        });
        return () => {
            tl.kill();
            window.removeEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    setAnimationState(false);
                } else {
                    setAnimationState(true);
                }
            });
        };
    }, [tl, animationState]);

    return [
        <>
            <div {...blockProps} key={"render"}>
                <button
                    ref={but}
                    style={{
                        maxWidth: attributes.size,
                    }}
                    className={`but double-border ${animationState ? 'no-anim' : ''}`}
                    onMouseOver={() => tl.play()}
                    onMouseLeave={() => tl.reverse()}
                >
                    <span>{attributes.text}</span>

                    <img src={redArrow} alt=""/>
                    {/* <RedArrRight /> */}
                </button>
            </div>
            <InspectorControls>
                <PanelBody title={"Réglages"}>
                <TextControl
                    help=""
                    label="Texte du bouton"
                    onChange={handleChangeText}
                    value={attributes.text}
                />
                    <TextControl
                        help="Taille du bouton une fois ouvert"
                        label="Taille du bouton"
                        onChange={handleChangeSize}
                        value={attributes.size}
                    />
                </PanelBody>
            </InspectorControls>
        </>

    ];
}
