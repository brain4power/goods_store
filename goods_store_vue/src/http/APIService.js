import axios from 'axios';
import AuthService from '../auth/AuthService';

const API_URL = 'http://localhost:8000';

export class APIService {
    constructor() {

    }

    getProducts() {
        const url = `${API_URL}/api/v1/products/`;
        return axios.get(url, {headers: {Authorization: `Bearer ${AuthService.getAuthToken()}`}})
            .then(response => response.data);
    }

    getProduct(pk) {
        const url = `${API_URL}/api/v1/products/${pk}`;
        return axios.get(url, {headers: {Authorization: `Bearer ${AuthService.getAuthToken()}`}})
            .then(response => response.data);
    }

    getProductsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url, { headers: { Authorization: `Bearer ${AuthService.getAuthToken()}` }}).then(response => response.data);

    }
}
