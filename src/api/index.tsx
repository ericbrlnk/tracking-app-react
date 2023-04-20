import axios from 'axios';

export const SERVER_URL = 'http://localhost:5087/';
export const ENDPOINTS = {
    inbox: 'Inbox'
}

// this component is used to set an endpoint (server) based on the given url
// it also defines methods for fetching, posting etc., which realize certain HTTP-requests

export const createEndPoint = (endpoint: string) =>  {
    var url = SERVER_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: (id: number) => axios.get(url + id),
        post: (newRecord: object) => axios.post(url, newRecord),
        put: (id: number, updatedRecord: object) => axios.put(url + id, updatedRecord),
        delete: (id: number) => axios.delete(url + id)
    }
}