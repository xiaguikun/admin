import axios from 'axios';
import qs from 'qs';

const instance=axios.create({
    baseURL:'http://pudge.wang:3000/api',
    timeout:5000
});

const http={
    get(url,params){
        return new Promise((resolve,reject)=>{
            instance.get(url,{
                params:params
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    post(url,data){
        return new Promise((resolve,reject)=>{
            instance.post(url,qs.stringify(data))
            .then((response)=>{
                resolve(response)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
}

export default http;