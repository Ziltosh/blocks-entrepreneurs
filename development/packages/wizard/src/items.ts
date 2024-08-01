import icon1 from "./img/icons/Icon-8.png";
import icon2 from "./img/icons/Icon-7.png";
import icon3 from "./img/icons/Icon-1.png";
import icon4 from "./img/icons/Icon-2.png";
import icon5 from "./img/icons/Icon-3.png";

export type Item = {
    icon: string;
    title: string;
    des: string;
    buttonText?: string;
};

export const items: Item[] = [
    {
        icon: icon1,
        title:
            "Un accompagnement unique et sur mesure permettant de dépasser votre plafond de verre actuel, tout en assurant une meilleure gestion, fluidité et qualité de vie entrepreneuriale",
        des: "Nous élaborons une stratégie adaptée à votre marché et à vos enjeux spécifiques, afin que vous puissiez naviguer sereinement dans un environnement compétitif.",
        // buttonText: "Clarté et Sérénité dans vos décisions et actions.",
    },
    {
        icon: icon2,
        title:
            "De la clarté et sérénité dans vos décisions et actions",
        des: "Bénéficiez de l’expertise, de la vision et du soutien d'une équipe de coachs dédiée à votre succès. Nous vous accompagnons individuellement pour lever les freins et combler les lacunes.",
    },
    {
        icon: icon3,
        title:
            "Des ressources inestimables accessibles à vie",
        des: "Accédez à des outils et des connaissances précieuses pour renforcer vos compétences et révéler des opportunités insoupçonnées. Mastermind, masterclasses inédites, immersions, événements…\n",
    },
    {
        icon: icon4,
        title:
            "Un réseau solide à portée de main",
        des: "Rejoignez la communauté d’Entrepreneurs.com pour bâtir un réseau professionnel robuste et dynamique, essentiel pour votre croissance.",
    },
    {
        icon: icon5,
        title: "Un éveil et une prise de conscience votre potentiel entrepreneurial",
        des: "Atteignez vos objectifs et prenez la place qui vous revient dans l'écosystème entrepreneurial, en vous positionnant comme un leader visionnaire et un acteur clé de votre marché..",
        // buttonText: "Vous positionnez votre business à sa vraie place.",
    },
];