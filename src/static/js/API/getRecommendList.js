import {baseurl} from './baseurl'
export async function getRecommendList(num = 6){
    let res,resjson;
    try{
     res = await fetch(`${baseurl}personalized?limit=${num}`);
     resjson = await res.json();
    }catch(e){
        console.log(e)
    }
    let result = resjson.result;
 return result;
 // id
 // name
 // picUrl
}