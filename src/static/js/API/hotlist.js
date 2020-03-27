import {baseurl} from './baseurl'
// search/hot
export async function getHotList() {
    let res = await fetch(`${baseurl}search/hot`, {
        // cache:"force-cache",
        // xhrFields: { withCredentials: true }
    });
    let resjson = await res.json();
    let result = []
    if(resjson.code === 200){
        result = resjson.result.hots
    }
    return result;
}