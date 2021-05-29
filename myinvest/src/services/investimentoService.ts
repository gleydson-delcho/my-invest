import axios from 'axios';
import { baseURL } from './api';

class InvestimentosService {

    retrieveAllInvestimentos() {
        return axios.get(`${baseURL}investimentos`);
    }

    saveInvetimento(investimento) {
        return axios.post(`${baseURL}/investimentos`, investimento);
    }

    deleteInvestimento(id) {
        return axios.delete(`${baseURL}/investimentos/${id}`);
    }
}
export default new InvestimentosService();