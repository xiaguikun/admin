import {put,takeEvery} from 'redux-saga/effects';

import {postOrderList} from '../utils/api.js';


function* changeTitle(action) {
    yield put({type:'changeTitle',title:action.title});    
}

//请求订单管理数据
function* changeOrder(action){
    // console.log(action);
    const orderRes=yield postOrderList({
        page:action.page,
        page_size:action.page_size,
        start_time:action.start_time,
        end_time:action.end_time,
        status:action.status
    });
    // console.log(orderRes);
    orderRes.data.result.forEach(item=>{
        return item.key=item._id;
    })
    yield put({type:'changeOrderList',data:orderRes.data.result,total:orderRes.data.total,status:orderRes.data.status})
}



function* mySaga() {
    yield takeEvery('toChangeTitle',changeTitle);
    
    //匹配订单管理
    yield takeEvery('typeOrder',changeOrder);
} 

export default mySaga

