import axios from "axios";
import { API_BASE,GetFields,PostField } from "../utils/endpoints";

export async function GetAllFields(){

   
    try {
        const apiRequest = await axios({
            method:'GET',
            url:API_BASE+ GetFields
        });
        return apiRequest.data;

    } catch (error) {
        console.log(error);
    }
}

export default GetAllFields
