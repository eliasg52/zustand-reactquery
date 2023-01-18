import create from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteState = {
  favorites: string[];
  addFavorite: (newFavorite: string) => void;
};

export const useFavoriteStore = create(
  persist<FavoriteState>(
    (set) => ({
      favorites: [],

      addFavorite: (newFavorite) =>
        set((state) => ({
          ...state,
          favorites: [...state.favorites, newFavorite],
        })),
    }),
    { name: 'local-storage' }
  )
);
