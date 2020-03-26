import {getAlbum} from './getalbum'
export async function getPoster(id){
    let res,result;
    try{
     res = await getAlbum(id);
     result = res.artist.picUrl;
    }catch(e){console.log(e)}
    console.log(result)
    return result;
}