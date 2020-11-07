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

//删除数据
export const deleteData=(params)=>{
    return http.post('/tables/basic/delete',params)
}

//高级表格
export const getHeightList=(params)=>{
    return http.get('/hightables/list',params);
}

//获取城市列表
export const postCityList=(params)=>{
    return http.post('/cities/manage/list',params);
}

//请求城市下拉菜单
export const getCityList=(params)=>{
    return http.get('/cities/list',params)
}

//添加城市列表
export const addCityList=(params)=>{
    return http.post('/cities/manage/add',params)
}

//删除城市管理数据
export const delItem=(params)=>{
    return http.post('/cities/manage/del',params)
}

//请求订单数据
export const postOrderList=(params)=>{
    return http.post('/orders/list',params);
}