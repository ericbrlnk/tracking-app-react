import axios from 'axios';

export const SERVER_URL = 'http://localhost:5087/';
export const ENDPOINTS = {
    inbox: 'Inbox'
}

// this component is used to set an endpoint (server) based on the given url
// it also defines methods for fetching, posting etc., which realize certain HTTP-requests

export const createEndPoint = (endpoint: any) =>  {
    var url = SERVER_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: (id: any) => axios.get(url + id),
        post: (newRecord: any) => axios.post(url, newRecord),
        put: (id: any , updatedRecord: any) => axios.put(url + id, updatedRecord),
        delete: (id: any) => axios.delete(url + id)
    }
}