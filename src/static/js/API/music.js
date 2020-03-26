// 搜索接口
// 测试域名   http://localhost:3001/
// 接口字段   search
// 
import {baseurl as baseHost} from './baseurl'
// let baseHost = "http://47.98.229.148:3000/"
export async function  APIsearchMusic(keywords){
    let songsList;
    try{
        let data =  await fetch(`${baseHost}search?keywords=${keywords}`,{
            xhrFields: { withCredentials: true },
            cache:"force-cache"
        })
        let result = await data.json()
        songsList = result.result.songs;
    }catch(e){
        console.log(e)
    }
    return songsList;
}
// 根据id获取歌曲url
export async function getMusicUrl(id){
    let result = await fetch(`${baseHost}song/url?id=${id}`,{
        xhrFields: { withCredentials: true },
        cache:"force-cache"
    });
    let data = await result.json();
    return data.data[0].url
    console.log(data)
}

