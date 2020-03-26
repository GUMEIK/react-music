import {APIsearchMusic} from '../../static/js/API/music'
export let searchMusicType = "searchMusic";

export function createSearchMusicAction(songsList){
    return {
        type:searchMusicType,
        payload:songsList
    }
}

export function getSongsListAction(keywords){
    return (dispatch,getState,other)=>{
        APIsearchMusic(keywords).then(res=>{
            dispatch(createSearchMusicAction(res))
        });
        
    }
}