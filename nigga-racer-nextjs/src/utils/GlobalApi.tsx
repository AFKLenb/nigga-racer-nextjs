const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы

// API - запрос на получение проектов
const getProjects = () => axiosClient.get('/projects?populate=*');
// API - запрос на получение проектов
const getSingleProject = (id) => axiosClient.get('/projects?filters[slug][$eqi]='+id+'&populate=*');
// API - запрос на получение услуг
const getServices = () => axiosClient.get('/services?populate=*');
// API - запрос на получение контактов
const getContacts = () => axiosClient.get('/contacts?populate=*');
// API - запрос на получение соц-сетей
const getSocials = () => axiosClient.get('/socials?populate=*');
export default {
    getProjects,
    getSingleProject,
    getServices,
    getContacts,
    getSocials
}