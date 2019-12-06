import axios from 'axios';

const setAuthHeader = token => {
    if (token) {
        axios.defaults.headers.common['auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['auth-token'];
    }
}

export default setAuthHeader;