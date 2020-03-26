import {changeUrlReducer} from './changeAudioUrl'
import {isShowModalReducer} from './isShowModal'
import {isPausedReducer} from './isPaused'
import {searchMusicReducer} from './searchMusic'
import {posterReducer} from './poster'
export function reducer(state = {},action){
    const newState = {
        url:changeUrlReducer(state.url,action),
        isShowModal:isShowModalReducer(state.isShowModal,action),
        isPaused:isPausedReducer(state.isPaused,action),
        songsList:searchMusicReducer(state.songsList,action),
        posterUrl:posterReducer(state.posterUrl,action)
    }
    return newState;
}