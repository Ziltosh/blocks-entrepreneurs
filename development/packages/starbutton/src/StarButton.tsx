import star1 from "./img/svg/star-1.svg";
import star2 from "./img/svg/star-2.svg";


export const StarButton = () => {
    return (
        <div className="but star-but">
            <span>Réserver un appel</span>
            <img className="star-1" src={star1} alt=""/>
            <img className="star-2" src={star2} alt=""/>
            <img className="star-3" src={star2} alt=""/>
        </div>
    );
}