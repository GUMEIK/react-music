import {baseurl} from './baseurl'
export async function getMusicDetail(id) {
    let res, resjson;
    try {
        // 我日，给fetch加个空对象就不跨域了
        res = await fetch(`${baseurl}song/detail?ids=${id}`,{
            // mode:"no-cors",
            // cache:"force-cache",
            // xhrFields: { withCredentials: true },
        });

        resjson = await res.json();
        console.log(resjson)
    } catch (e) {
        console.log(e)
    }
    let result = {};
    if (resjson.code === 200) {
        result = resjson.songs[0];
    }
    return result;
}
