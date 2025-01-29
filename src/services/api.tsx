import axios from "axios"

const apiUrl = "https://api.artic.edu/api/v1/artworks"

export const getArtworks = async(page?:number) => {
    const response = await axios.get(page ? `${apiUrl}?page=${page}` : apiUrl)
    return response.data
}

export const getArtworksForFields = async(id:string | number) => {
    const response = await axios.get(`${apiUrl}?ids=${id}&fields=id,title,image_id,short_description,artist_display,artist_title,description,exhibition_history,date_display,date_start`)
    return response.data
}

export const getUrlImage = (id:string) => {
    return `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`
}
