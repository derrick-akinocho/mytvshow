import s from "./style.module.css";
import {SMALL_IMG_COVER_BASE_URL} from "../../../config";

function TVShowListItem({tvShow, onCLick}) {

    return(
        <div onClick={() => onCLick(tvShow)} className={s.container}>
            <img alt={tvShow.name} className={s.img} src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}/>
            <div className={s.title}> {tvShow.name}</div>
        </div>
    );
}

export default TVShowListItem;