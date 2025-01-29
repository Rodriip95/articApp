export type TypeDataArtworks = {
    id: number,
    title: string,
    short_description: string,
    image_id: string,
    artist_display: string,
    exhibition_history: string,
    description: string,
    date_display: string,
}

export type TypeResponseArtworks = {
    data: TypeDataArtworks[]
}

export type TypeArtworks = {
    title: string,
    artist_title: string,
    image_id: string,
    id: number,
    date_display: string,
    date_start: string,
}