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
const getSingleProject = (id) => axiosClient.get('/projects?filters[slug][$eqi]='+id+'&populate[0]=image&populate[1]=contractor.image&populate[2]=reviews&populate[3]=reviews.imageUser');
// API - запрос на получение услуг
const getServices = () => axiosClient.get('/services?populate=*');
// API - запрос на получение контактов
const getContacts = () => axiosClient.get('/contacts?populate=*');
// API - запрос на получение соц-сетей
// const getSocials = () => axiosClient.get('/socials?populate=*');
// API - запрос на получение отзывов
const getReviews = () => axiosClient.get('/reviews?populate=*');
// API - запрос на получение секции о нас
const getAbout = () => axiosClient.get('/abouts?populate=*');
// API - запрос на получение главной секции
const getHero = () => axiosClient.get('/heroes?populate=*');
// API - запрос на получение навигации
const getNavbars = () => axiosClient.get('/navbars?populate=*');
// API - запрос на получение одиночной информации
const getSetting = () => axiosClient.get('setting?populate[0]=Social.iconVk&populate[1]=Contact&populate[2]=Contact.icon&populate[3]=Info&populate[4]=Logo&populate[5]=Logo.icon&populate[6]=Social.iconYoutube&populate[7]=Social.iconTelegram&populate[8]=Contact.iconPhone&populate[9]=Contact.iconEmail&populate[10]=Contact.iconWork');
export default {
    getProjects,
    getSingleProject,
    getServices,
    getContacts,
    // getSocials,
    getReviews,
    getAbout,
    getHero,
    getNavbars,
    getSetting
}