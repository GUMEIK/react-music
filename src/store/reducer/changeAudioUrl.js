import {changUrlType} from '../action/changeAudioUrl'
export function changeUrlReducer(state = {
    url:"http://www.msse.vip/audio/test2.mp3",
    isAutoPlay:false
},action){
    if(action.type === changUrlType){
        return {
            url:action.payload,
            isAutoPlay:true
        };
    }
    return state;
}