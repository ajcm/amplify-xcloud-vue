
import axios from "axios";

var httpUrl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : "http://localhost:8080/" 


export const getBackendUrl =  () => (httpUrl)


export const getEcho  = async (request: string) :  Promise<string> => {
    const  response = await axios.post(
        httpUrl,
        request,
        {
            headers: {
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*",
            }
        }
    )
     

    return response.data
}



export const getUserId = async (request: string) => {
    const  response = await axios.post(
        httpUrl,
        request,
        {
            headers: {
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*",
            }
        }
    )
     

    return response.data
}
