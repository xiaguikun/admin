import {put,takeEvery} from 'redux-saga/effects';


function* changeTitle(action) {
    yield put({type:'changeTitle',title:action.title})
}

function* mySaga() {
    yield takeEvery('toChangeTitle',changeTitle)
} 

export default mySaga

