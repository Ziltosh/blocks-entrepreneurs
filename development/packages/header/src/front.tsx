import {hydrateRoot, useRef, useState} from "@wordpress/element";

import Grid from "./img/Grid.png";
import LinkedIn from "./img/social-icons/in.svg"
import Instagram from "./img/social-icons/instagram.svg"
import Youtube from "./img/social-icons/youtube.svg"
import TikTok from "./img/social-icons/tiktok.svg"
import elogo from "./img/svg/e-logo.svg";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-header');

const HeaderInteractive = () => {
    const mobileNav = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(true);

    const handleMobileMenu = () => {
        mobileNav.current!.classList.toggle("active");
        setState(!state);
        // if (state) {
        //   document.body.style.overflow = "hidden";
        // } else {
        //   document.body.style.overflow = "unset";
        // }
    };

    const nav = [
        {name: "Accueil", href: "/", id: 0},
        {name: "Nos Strategies", href: "/about", id: 1},
        {name: "Études de cas", href: "/contact", id: 2},
        {
            name: "Ressources",
            href: "#",
            id: 3,
            subNav: [
                {
                    name: "La Communauté",
                    href: "/",
                    id: 0,
                },
                {
                    name: "Le Déclic",
                    href: "/",
                    id: 1,
                },
                {
                    name: "Actualités",
                    href: "/",
                    id: 2,
                },
            ],
        },
    ];


    return (
        <>
            <svg
                onClick={() => handleMobileMenu()}
                className="mobile-menu-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M3 12H15M3 6H21M3 18H21"
                    stroke="#CDCDCD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <img src={elogo} alt="logo" className="logo"/>
            <nav>
                <ul>
                    {nav.map((item) => (
                        <li
                            key={item.id}
                            className={item.subNav && "sub-nav-wrapper"}
                            onClick={(e) =>
                                item.subNav && e.currentTarget.classList.toggle("active")
                            }
                            onBlur={(e) =>
                                item.subNav && e.currentTarget.classList.remove("active")
                            }
                        >
                            <a href={item.href}>{item.name}</a>
                            {item.subNav && (
                                <>
                                    <svg width="17" height="16" viewBox="0 0 17 16">
                                        <rect x="0.5" width="16" height="16" rx="8"/>
                                        <path
                                            d="M6 7L8.5 9.5L11 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <ul className="sub-nav">
                                        {item.subNav.map((item) => (
                                            <li key={item.id}>
                                                <a href={item.href}>{item.name}</a>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <rect
                                                        x="0.5"
                                                        y="0.5"
                                                        width="23"
                                                        height="23"
                                                        rx="11.5"
                                                        stroke="white"
                                                        strokeOpacity="0.1"
                                                    />
                                                    <g opacity="0.2">
                                                        <path
                                                            d="M7.19971 12H16.7997M16.7997 12L13.1997 8.40001M16.7997 12L13.1997 15.6"
                                                            stroke="white"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </g>
                                                </svg>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div ref={mobileNav} className="mobile-nav">
                <div className="grid">
                    <img src={Grid} alt=""/>
                </div>
                <ul className="nav-list">
                    {nav.map((item) => (
                        <li key={item.id} className={item.subNav && "sub-nav-wrapper"}>
                            <a
                                onClick={(e) =>
                                    item.subNav &&
                                    e.currentTarget.parentElement!.classList.toggle("active")
                                }
                                href={item.href}
                            >
                                {item.name}
                            </a>
                            {item.subNav && (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <rect
                                            width="16"
                                            height="16"
                                            rx="8"
                                            fill="white"
                                            fillOpacity="0.1"
                                        />
                                        <path
                                            d="M5.5 7L8 9.5L10.5 7"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <ul className="sub-nav">
                                        {item.subNav.map((item) => (
                                            <li key={item.id}>
                                                <a href={item.href}>{item.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="footer">
                    <span>Follow us</span>
                    <ul className="social-icons">
                        <li>
                            <img src={LinkedIn} alt={"LinkedIn"}/>
                        </li>
                        <li>
                            <img src={Instagram} alt={"Instagram"}/>
                        </li>
                        <li>
                            <img src={Youtube} alt={"Youtube"}/>
                        </li>
                        <li>
                            <img src={TikTok} alt={"Tiktok"}/>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <HeaderInteractive/>)
    })
}