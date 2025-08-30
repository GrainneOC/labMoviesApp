import React, { useState } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((review: Review) => void);
    mustWatch: number[];
    addToMustWatch: ((movie: BaseMovieProps) => void);
    removeFromMustWatch: ((movie: BaseMovieProps) => void);
}

const initialContextState: MovieContextInterface = {
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addReview: () => {},
    mustWatch: [],
    addToMustWatch: () => {},
    removeFromMustWatch: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);

    const addToFavourites = (movie: BaseMovieProps) => {
        if (!favourites.includes(movie.id)) {
            setFavourites([...favourites, movie.id]);
        }
    };

    const removeFromFavourites = (movie: BaseMovieProps) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addToMustWatch = (movie: BaseMovieProps) => {
        if (!mustWatch.includes(movie.id)) {
            setMustWatch([...mustWatch, movie.id]);
        }
    };

    const removeFromMustWatch = (movie: BaseMovieProps) => {
        setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
    };

    const addReview = (review: Review) => {
        setMyReviews([...myReviews, review]);
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                mustWatch,
                addToMustWatch,
                removeFromMustWatch,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
