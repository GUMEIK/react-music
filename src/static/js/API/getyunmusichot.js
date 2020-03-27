// 排行版（云音乐热歌榜）
import {baseurl} from './baseurl'
import {getMusicDetail} from './getmusicdetail'

export async function getYunMusicHotList(index = 20) {
    // 云音乐热歌榜
    let res = await fetch(`${baseurl}top/list?idx=1`,{
        // cache:"force-cache",
        // xhrFields: { withCredentials: true }
    })
    let resjson = await res.json();
    let result = [];
    if(resjson.code === 200){
        result = resjson.privileges;
    }
    // result是一个数组，数组中的每一项是个对象
    let songDeatailArr = [];
    for(let i = 0;i < index;i++){
        let songDetail = await getMusicDetail(result[i].id);
        songDeatailArr.push(songDetail)
    }
    // name　歌曲名字
        // ar　数组　作者信息  ar[0].name 作者名字
        // al        专辑信息
    return songDeatailArr;
}
