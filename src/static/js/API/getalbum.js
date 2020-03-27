import {baseurl} from './baseurl'
export async function getAlbum(id){
    let res = await fetch(`${baseurl}artist/album?id=${id}`,{
        // cache:"force-cache",
        // xhrFields: { withCredentials: true }
    });
    let resjson = await res.json();
    console.log(resjson)
    return resjson
}