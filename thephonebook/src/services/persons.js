import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'
const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response =>response.data )
}

const create = (personObj) => {
    const request = axios.post(baseUrl, personObj);
    return request.then(response => response.data)
}

const update = (id, personObj) => {
    const request = axios.put(`${baseUrl}/${id}`, personObj);
    return request.then(response => response.data)
}
const deleteOne = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=> console.log(response))
}

export default {
    getAll,
    create,
    update,
    deleteOne
}