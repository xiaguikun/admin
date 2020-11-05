const defaultState={
    pageTitle:sessionStorage.getItem('pageTitle') ? sessionStorage.getItem('pageTitle') : '首页'
}

const reducer=(state=defaultState,action)=>{
    action=action ? action : {type:''}
    switch(action.type){
        case 'changeTitle':
            return {
                pageTitle:action.title
            }
        default:
            return state;
    }
}

export default reducer;