export const changUrlType = "changeUrl";

export function createChangeUrlAction(url){
    return {
        type:changUrlType,
        payload:url
    }
}