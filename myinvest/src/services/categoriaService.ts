import axios from 'axios';
import { baseURL } from './api';

class CategoriaService {

    retrieveAllCategorias() {
        return axios.get(`${baseURL}categoria`);
    }
}

export default new CategoriaService();