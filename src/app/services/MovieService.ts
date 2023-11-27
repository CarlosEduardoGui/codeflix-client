import { Movie, Movies } from '../types/movie';
import { RequestOptions, apiRequest } from './ApiRequest'

export const getMovieBbyId = async (id: string): Promise<Movie> => {
    return apiRequest(`movies/${encodeURIComponent(id)}`);
}

export const getFeatureMovie = async (id: string): Promise<Movies> => {
    return apiRequest(`featured/${id}`);
}

export const getMoviesByGenre = async (
    genre: string,
    options?: RequestOptions
): Promise<Movie> => {
    return apiRequest(
        `movies`,
        { genre_list: encodeURIComponent(genre) },
        options
    );
}

export const searchMovies = async (
    title: string = '',
    genre: string = '',
    options?: RequestOptions
): Promise<Movies> => {
    return apiRequest(
        `movies`,
        {
            title_like: encodeURIComponent(title),
            genres_like: encodeURIComponent(genre),
        },
        options
    );
}