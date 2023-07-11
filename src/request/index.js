//所有的请求都定义在此
import axios from 'axios';
import store from 'storejs'
const http = axios.create({
    baseURL:'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app'
});
// 添加请求拦截器
http.interceptors.request.use(function(config){
    console.log(config);
    config.params = config.params || {}
    const cookie = store.get('__m__cookie') ?? "";
    config.params.cookie = cookie
    return config
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

export const checkQrStatus = (key) => http.get('/login/qr/check',{params: {
    key,timestamp : Date.now()
}})

export const getUserAccount = () => http.get('/user/account')

export const getUserPlaylist = (uid) => http.get('/user/playlist',{params:{uid}})

export const getUserDetail = (uid) => http.get('/user/detail',{params:{uid}})
export const getUserBinding = (uid) => http.get('/user/binding',{params:{uid}})
//历史评论
export const getUserHistory = (uid,time=0) => http.get('/user/comment/history',{params:{uid,time}})
//歌曲详情
export const getSong = (ids) => http.get('/song/detail',{params:{ids}})
//个人收藏
export const getUserSubcount= () => http.get('/topic/sublist')

export const setUser = (gender,birthday,nickname,province,city,signature) => http.get('/user/update',{params:{gender,birthday,nickname,province,city,signature}})
//重复昵称检测
export const getNickname = (nickname) => http.get('/nickname/check',{params:{nickname}})

// 播放歌曲
export const getTrackDetail = (id) =>
  http.get('/song/detail', { params: { ids: id } });
export const getMP3 = (id) =>
  http.get('/song/url/v1', { params: { id, level: 'standard' } });
