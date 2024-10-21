import axios from "axios";
import {BASE_URL} from "../config";

class TVShowAPI {

    static async getPopularsTV(){
        const response = await axios.get(`${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
        return response.data.results;
    }

    static async getRecommendationsTV(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
        return response.data.results;
    }

    static async getSearchByTitleTV(title){
        const response = await axios.get(`${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`);
        return response.data.results;
    }
}

export default TVShowAPI