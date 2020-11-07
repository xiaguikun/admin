const defaultState={
    pageTitle:sessionStorage.getItem('pageTitle') ? sessionStorage.getItem('pageTitle') : '首页',
    orderList:[],
    orderTotal:1,
    orderStatus:0
}

const reducer=(state=defaultState,action)=>{
    action=action ? action : {type:''}
    switch(action.type){
        case 'changeTitle':
            return {
                ...state,
                pageTitle:action.title
            }
        case 'changeOrderList':
            return{
                ...state,
                orderList:action.data,
                orderTotal:action.total,
                orderStatus:action.status
            }
        default:
            return state;
    }
}

export default reducer;