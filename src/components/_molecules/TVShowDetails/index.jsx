import s from "./style.module.css";
import FiveStarRading from "../../_atomes/FiveStarRading";

function TVShowDetails({tvShow}){

    const rating = (tvShow.vote_average / 2).toFixed(2);
    return(
        <div>
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating_container}>
                <FiveStarRading rating={rating}/>
                <div className={s.rating}>{rating} / 5</div>
            </div>

            <div className={s.overview}>{tvShow.overview}</div>
        </div>
    );
}

export default TVShowDetails;