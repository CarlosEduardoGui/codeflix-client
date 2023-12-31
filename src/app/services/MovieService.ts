import { Movie, Movies } from '../types/Movie';
import { RequestOptions, apiRequest } from './ApiRequest'

export const getMovieBbyId = async (id: string): Promise<Movie> => {
    return apiRequest(`movies/${encodeURIComponent(id)}`);
}

export const getFeatureMovie = async (id: string): Promise<Movie> => {
    return apiRequest(`featured/${id}`);
}

export const getMoviesByGenre = async (
    genre: string,
    options?: RequestOptions
): Promise<Movies> => {
    return apiRequest(
        `movies`,
        { genres_like: encodeURIComponent(genre) },
        options
    );
}

export const searchMovies = async (
    title: string = '',
    genre: string = '',
    options: RequestOptions = {
        _limit: 100
    }
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