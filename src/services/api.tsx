import axios from "axios"

const apiUrl = "https://api.artic.edu/api/v1/artworks"

export const getArtworks = async() => {
    const response = await axios.get(apiUrl)
    console.log(response.data);
    return response
}