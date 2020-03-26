import {showModalType,hideModalType} from '../action/isShowModal'
export function isShowModalReducer(state = false,action){
    if(action.type === showModalType){
        return true;
    }else{
        return false;
    }
    return state;
}