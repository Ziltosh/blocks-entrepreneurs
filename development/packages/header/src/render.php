<?php
$nav = [
    [
        "name" => "Accueil",
        "href" => "/",
        "id" => 0
    ],
    [
        "name" => "Nos Strategies",
        "href" => "/about",
        "id" => 1
    ],
    [
        "name" => "Études de cas",
        "href" => "/contact",
        "id" => 2
    ],
    [
        "name" => "Ressources",
        "href" => "#",
        "id" => 3,
        "subNav" => [
            [
                "name" => "La Communauté",
                "href" => "/",
                "id" => 0
            ],
            [
                "name" => "Le Déclic",
                "href" => "/",
                "id" => 1
            ],
            [
                "name" => "Actualités",
                "href" => "/",
                "id" => 2
            ]
        ]
    ]
];

?>

<header id="header">
    <svg
        class="mobile-menu-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M3 12H15M3 6H21M3 18H21"
            stroke="#CDCDCD"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
    <img src="<?=get_stylesheet_directory_uri().'/src/svg/e-logo.svg' ?>" alt="logo" className="logo"/>

    <nav>
        <ul>
            <?php foreach ($nav as $item) : ?>
                <li
                    class="item.subNav sub-nav-wrapper"
                    >
                    <a href="<?=$item['href'] ?>"><?= $item['name'] ?></a>

            <?php endforeach; ?>
                </li>
        </ul>
    </nav>

            
<!--            {nav.map((item) => (-->
<!--            <li-->
<!--                key={item.id}-->
<!--                className={item.subNav && "sub-nav-wrapper"}-->
<!--            onClick={(e) =>-->
<!--            item.subNav && e.currentTarget.classList.toggle("active")-->
<!--            }-->
<!--            onBlur={(e) =>-->
<!--            item.subNav && e.currentTarget.classList.remove("active")-->
<!--            }-->
<!--            >-->
<!--            <a href={item.href}>{item.name}</a>-->
<!--            {item.subNav && (-->
<!--            <>-->
<!--            <svg width="17" height="16" viewBox="0 0 17 16">-->
<!--                <rect x="0.5" width="16" height="16" rx="8"/>-->
<!--                <path-->
<!--                    d="M6 7L8.5 9.5L11 7"-->
<!--                    strokeLinecap="round"-->
<!--                    strokeLinejoin="round"-->
<!--                />-->
<!--            </svg>-->
<!---->
<!--            <ul className="sub-nav">-->
<!--                {item.subNav.map((item) => (-->
<!--                <li key={item.id}>-->
<!--                    <a href={item.href}>{item.name}</a>-->
<!--                    <svg-->
<!--                        width="24"-->
<!--                        height="24"-->
<!--                        viewBox="0 0 24 24"-->
<!--                        fill="none"-->
<!--                    >-->
<!--                        <rect-->
<!--                            x="0.5"-->
<!--                            y="0.5"-->
<!--                            width="23"-->
<!--                            height="23"-->
<!--                            rx="11.5"-->
<!--                            stroke="white"-->
<!--                            strokeOpacity="0.1"-->
<!--                        />-->
<!--                        <g opacity="0.2">-->
<!--                            <path-->
<!--                                d="M7.19971 12H16.7997M16.7997 12L13.1997 8.40001M16.7997 12L13.1997 15.6"-->
<!--                                stroke="white"-->
<!--                                strokeLinecap="round"-->
<!--                                strokeLinejoin="round"-->
<!--                            />-->
<!--                        </g>-->
<!--                    </svg>-->
<!--                </li>-->
<!--                ))}-->
<!--            </ul>-->
<!--        </>-->
<!--        )}-->
<!--        </li>-->
<!--        ))}-->
<!--        </ul>-->
    </nav>
    <div className="but star-but">
        <span>Réserver un appel</span>
        <img className="star-1" src={star1} alt=""/>
        <img className="star-2" src={star2} alt=""/>
        <img className="star-3" src={star2} alt=""/>
    </div>
</header>