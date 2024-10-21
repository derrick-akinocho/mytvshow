import s from "./style.module.css";
import {Star, StarFill, StarHalf} from "react-bootstrap-icons";

function FiveStarRading({rating}) {

    const starList = [];
    const starFillCount = Math.floor(rating);
    const hasStartHalf = rating - starFillCount >= 0.5;
    const emptyStartCount = 5 - starFillCount - (hasStartHalf ? 1 :0);

    for(let i=1; i <= starFillCount; i++){
        starList.push(<StarFill key={"start-fill" + i }/>);
    }

    if(hasStartHalf){
        starList.push(<StarHalf key={"star-half"}/>);
    }

    for(let i = 1; i <= emptyStartCount; i++){
        starList.push(<Star key={"star-empty" + i}/>);
    }

    return(
        <div>
            {starList}
        </div>
    );
}

export default FiveStarRading;