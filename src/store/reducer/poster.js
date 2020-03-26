import {changePosterUrlType} from '../action/poster'
export function posterReducer(state = "",action){
    if(action.type === changePosterUrlType){
        return action.payload;
    }
    return state;
}