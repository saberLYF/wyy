//所有的请求都定义在此
import axios from 'axios';
const http = axios.create({
    baseURL:'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app'
})
export const fetchPlaylistHot = () => http.get('/playlist/hot');
export const fetchHomePage = () => http.get('/homepage/block/page');
export const fetchHomeDragonBall = () => http.get('/homepage/dragon/ball');
export const fetchPlaylists = (cat) => http.get('/top/playlist', { params: { cat } });
export const fetchSearchDefault = () => http.get('/search/default');
export const fetchSearchSuggest = (params) => http.get('/search/suggest',{
    params:{
        keywords:params
    }
});
export const fetchStartTime = () => axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000');
export const fetchPersonalized = () => axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized');