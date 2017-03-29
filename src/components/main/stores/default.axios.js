import axios from 'axios';
import * as GlobalConfig from '../../../global.config.json';

export default axios.create({
    baseURL: GlobalConfig.serverRestBaseUrl,
    timeout: 2000,
    headers: {'Content-Type': 'application/json'}
})