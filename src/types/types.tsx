export type TypeDataArtworks = {
    id: number,
    title: string,
    short_description: string,
    image_id: string,
    artist_display: string,
    exhibition_history: string,
    description: string,
}

export type TypeResponseArtworks = {
    data: TypeDataArtworks[]
}