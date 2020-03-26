export let changePosterUrlType = "changePosterUrl"

export function createChangePosterUrl(url){
    return {
        type:changePosterUrlType,
        payload:url
    }
}

