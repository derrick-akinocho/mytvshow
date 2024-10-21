import "./global.css";
import s from "./style.module.css";
import TVShowAPI from "./api/tvShow";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config";
import TVShowDetails from "./components/_molecules/TVShowDetails";
import Logo from "./components/_atomes/Logo";
import iconTv from "./assets/img/television.png";
import TVShowList from "./components/_molecules/TVShowList";
import SearchBar from "./components/_atomes/SearchBar";

function App(){

    const [currentTv, setCurrentTv] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function getPopularsTvShow (){
        try{
            const populars = await TVShowAPI.getPopularsTV();

            if(populars.length > 0){
                setCurrentTv(populars[0]);
            }
        }catch (error){
            alert("Erreur " + error.message);
        }

    }

    async function getRecommendationTvShow (tvShowId){

        try{
            const recommendations = await TVShowAPI.getRecommendationsTV(tvShowId);

            if(recommendations.length > 0){
                setRecommendationList(recommendations.slice(0, 10));
            }
        }catch (error){
            alert("Erreur " + error.message);
        }

    }

    async function getSearchbyTitleTvShow (title){

        try{
            const response = await TVShowAPI.getSearchByTitleTV(title);

            if(response.length > 0){
                setCurrentTv(response[0]);
            }
        }catch (error){
            alert("Erreur " + error.message);
        }
    }

    useEffect(() => {
        getPopularsTvShow();
    }, []);

    useEffect(() => {
        if(currentTv){
            getRecommendationTvShow(currentTv.id);
        }
    }, [currentTv]);

    console.log("***", currentTv);

    return(
        <div className={s.main_container}
             style={{
                 background:
                     currentTv ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTv.backdrop_path}") no-repeat center / cover`
                     : "black",
             }}>
            <div className={s.header}>

                <div className={"row"}>

                    <div className={"col-4"}>
                        <Logo img={iconTv} title={"My-TVShow"} subtitles={"Find a show you may like"}/>
                    </div>

                    <div className={"col-md-12 col-lg-4"}>
                        <SearchBar onSubmit={getSearchbyTitleTvShow}/>
                    </div>

                </div>
            </div>

            <div className={s.tv_show_detail}>
                { currentTv && <TVShowDetails tvShow={currentTv} /> }
            </div>

            <div className={s.recommendations}>
                {
                    recommendationList && recommendationList.length > 0 && (
                        <TVShowList onClickItem={setCurrentTv} tvShowList={recommendationList}/>
                    )
                }
            </div>
        </div>
    );
}

export default App;