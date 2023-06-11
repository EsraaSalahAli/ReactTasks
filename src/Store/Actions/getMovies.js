import { axiosInstance } from "../../Network/axiosInstance";



export const getMovies = (data) => (dispatch) => {
    return axiosInstance.get(`/popular?api_key=1215fe9cab37ad33be4cfdfe3d049422&page=${data}`)
    .then((res) => dispatch({
        type: "GET_MOVIES",
        payload: res.data.results
    }))
    .catch((err) => console.log(err))
}