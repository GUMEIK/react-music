
import {searchMusicType} from '../action/searchMusic'

export function searchMusicReducer(state = [],action){
    if(action.type === searchMusicType){
        return action.payload;
    }
    return state;
}