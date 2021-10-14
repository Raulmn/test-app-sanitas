export interface PicsumSearchConfig {
    page: number;
    limit: number;
    blur?: number;
    cache?: boolean;
    grayscale?: boolean;
    id?: number;
    jpg?: boolean;
    height?: number;
    width?: number;
}


export interface ImageObject {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}
