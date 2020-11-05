import http from './http.js';

export const getWeather=(params)=>{
    return http.get('http://api.k780.com/?app=weather.today&weaid=hangzhou&appkey=53663&sign=de4a2a6565601374a46398b96166b354&format=json',params);
}

export const getPic=(params)=>{
    return http.get('/pics/list',params);
}

export const getBasicList=(params)=>{
    return http.get('/tables/basic/list',params)
}

export const deleteData=(params)=>{
    return http.post('/tables/basic/delete',params)
}