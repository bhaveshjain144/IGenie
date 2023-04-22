import axios from "axios";
import "./interceptors"
export const getQuestionListService = () => {
    return axios.get(`/api/questions`).then((reponse) => reponse.data)

}

export const addQuestionListService = (batchData: any) => {
    return axios.post('/api/questions', batchData)
}
export const editQuestionListService = (traineeData: any, id: string) => {
    return axios.patch(`/api/questions?id=${id}`, traineeData)
}
