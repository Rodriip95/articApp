import axios from "axios"

const apiUrl = "https://api.artic.edu/api/v1/artworks"

export const getArtworks = async() => {
    const response = await axios.get(apiUrl)
    return response.data
}

export const getArtworksForFields = async(id:string) => {
    const response = await axios.get(`apiUrl?ids=${id}&fields=id,title,image_id`)
    return response.data
}