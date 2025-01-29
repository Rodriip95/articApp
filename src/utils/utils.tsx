export const formatFavsForApi = (favs:string[]) => {
    let format = ''
    favs.forEach((f:string, index:number) => {
        if(index+1 < favs.length){
            format += f + ','
        } else {
            format += f
        }
    })
    return format
}