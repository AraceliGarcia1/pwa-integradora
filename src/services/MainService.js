import axios from "axios";

export default class MainService {
    static config = {
        headers: {
            Authorization:  localStorage.getItem('tkn'),
        },
    };

    static POST_SECURED(path, data) {
        return axios.post(path, data, {
            headers: {
                Authorization:  localStorage.getItem('tkn'),
            },
        });
    }


    static GET_SECURED(path) {
        return axios.get(path, {
            headers: {
                'authorization':  localStorage.getItem('tkn'),
            },
        });
    }

    static PUT_SECURED(path, data) {
        return axios.put(path, data, {
            headers: {
                Authorization:  localStorage.getItem('tkn'),
            },
        });
    }

    static DELETE_SECURED(path, data) {
        return axios({
            method: 'DELETE',
            url: path,
            data: data,
        });

    }

    // static GET_UNSECURED(path, data) {
    //     return axios.get(path, data, config);
    // }
    // static POST_UNSECURED(path, data) {
    //     return axios.post(path, data, config);
    // }
}