export type Movie = {
    id: number;
    title: string;
    description: string;
    yearLauched: string;
    link: string;
    castMembers: string[];
    genres: string[];
    thumbFileURL: string;
    bannerFileURL: string;
    videoFileURL: string;
    roting: string;
}

export type Movies = Movie[];