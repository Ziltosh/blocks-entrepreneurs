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
            "L’accompagnement qu’il vous faut pour ne plus être seule.e face aux enjeux de croissance de votre business en ligne ou physique.",
        des: "Une stratégie adaptée à votre marché et vos enjeux pour ne plus paniquer au milieu des requins.",
        buttonText: "Clarté et Sérénité dans vos décisions et actions.",
    },
    {
        icon: icon2,
        title:
            "L’expertise, la vision et le soutien, d’une équipe de coachs qui vous accompagnera individuellement, collectivement et quotidiennement.",
        des: "Vous enlevez ce qui vous freinent et ajoutez ce qui vous manque.",
    },
    {
        icon: icon3,
        title:
            "Des ressources inestimables accessibles à vie pour soutenir votre montée en compétences.",
        des: "Révélant des opportunités insoupçonnées.",
    },
    {
        icon: icon4,
        title:
            "L’accès à la communauté d’Entrepreneurs.com pour vous construire un réseau solide.",
        des: "L’accès à la communauté d’Entrepreneurs.com pour vous construire un réseau solide.",
    },
    {
        icon: icon5,
        title: "L’ouverture d’une voie entrepreneuriale novatrice,",
        des: "Grâce à vos initiatives, vous guidera vers la réalisation de vos aspirations et vous positionnera là où vous devriez être dans l'écosystème entrepreneurial.",
        buttonText: "Vous positionnez votre business à sa vraie place.",
    },
];