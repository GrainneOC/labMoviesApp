const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_KEY || "844dba0bfd8f3a4f3799f6130ef9e335"; // This should be in environment variables in production

export interface MovieT {
  id: number;
  title: string;
  budget: number;
  homepage: string | undefined;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
}

export interface MovieDetailsT extends MovieT {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface MovieImageT {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MovieListResponse {
  page: number;
  results: MovieT[];
  total_pages: number;
  total_results: number;
}

export interface MovieImagesResponse {
  id: number;
  backdrops: MovieImageT[];
  posters: MovieImageT[];
}

// Fetch popular movies
export const getPopularMovies = async (): Promise<MovieT[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );
  const data: MovieListResponse = await response.json();
  return data.results;
};

// Fetch top rated movies
export const getTopRatedMovies = async (): Promise<MovieT[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );
  const data: MovieListResponse = await response.json();
  return data.results;
};

// Fetch movies for discovery
export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

// Fetch movie by ID
export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

// Fetch genres
export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      TMDB_API_KEY +
      "&language=en-US"
  ).then( (response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

// Fetch movie images by ID
export const getMovieImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${TMDB_API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${TMDB_API_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};
