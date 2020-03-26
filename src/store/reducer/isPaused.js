import {pausedType,playedType} from '../action/isPaused'
export function isPausedReducer(state = true,action){
    if(action.type === playedType){
        return false;
    }else{
        return true;
    }
    return state;
}