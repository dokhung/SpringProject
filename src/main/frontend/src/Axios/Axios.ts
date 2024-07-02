import axios from "axios";

//const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://localhost:8080";

const request = axios.create({
    baseURL: API_URL
});

request.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.error(error);
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.error(error);
        return Promise.reject(error);
    }
);

export const LoginAxios = (loginData: { id: string, password: string }) => {
    console.log("Sending login data:", loginData);
    return request({
        method: 'post',
        url: '/api/login',
        headers: { 'Content-Type': 'application/json' },
        data: loginData,
        withCredentials: true
    });
};

