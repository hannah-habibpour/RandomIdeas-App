import axios from 'axios';

class IdeasApi {
    constructor() {
        this._apiUrl = 'http://localhost:8000/api/ideas'
    }

    getIdeas() {
        return axios.get(this._apiUrl);
    }

    createIdea(data) {
        return axios.post(this._apiUrl, data);
    }

    updateIdea(id, data) {
        return axios.put(`${this._apiUrl}/${id}`, data);
    }

    deleteIdea(id) {
        const username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
        return axios.delete(`${this._apiUrl}/${id}`, {
            data: {
                username,
            }
        });
    }
}

export default new IdeasApi(); // instead of bring it in to the component, we can just call it directly from the component
