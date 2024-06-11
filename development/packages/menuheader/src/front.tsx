import {hydrateRoot} from "@wordpress/element";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-menuheader');

const MenuHeaderInteractive = () => {
    // const mobileNav = useRef<HTMLDivElement>(null);
    // const [state, setState] = useState(true);

    // const handleMobileMenu = () => {
    //     mobileNav.current!.classList.toggle("active");
    //     setState(!state);
    //     // if (state) {
    //     //   document.body.style.overflow = "hidden";
    //     // } else {
    //     //   document.body.style.overflow = "unset";
    //     // }
    // };

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
    )
}

if (elements.length) {
    elements.forEach(element => {
        hydrateRoot(element, <MenuHeaderInteractive/>)
    })
}