import axios from 'axios';

class IdeasApi {
    constructor() {
        this._apiUrl = 'http://localhost:8000/api/ideas'
    }

    getIdeas() {
        return axios.get(this._apiUrl);
    }
}

export default new IdeasApi(); // instead of bring it in to the component, we can just call it directly from the component
