//所有的请求都定义在此
import axios from 'axios';
const http = axios.create({
    baseURL:'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app'
});
// 添加请求拦截器
// http.interceptors.request.use(function(config){
//     console.log(config);
// })
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
//https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail
export const fetchDetail = () => http.get('/search/hot/detail');
export const fetchToplist = () => axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail');
//获取歌单歌曲
export const fetchTrack = (id) => http.get(`/playlist/track/all?id=${id}`);
//获取歌单信息
export const fetchSongUser = (id) => http.get(`/playlist/detail?id=${id}`);


export const getQRKey = () => http.get('/login/qr/key');
export const getQrInfo = (key,qrimg=1) => http.get('/login/qr/create',{
    params:{key,qrimg}
});
