import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appliedEffects } from '@/constants/effects';

interface VideoState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  speed: number;
  volume: number;
  appliedEffects: string[];
  favorites: string[];
  recentEffects: string[];
  
  // Actions
  togglePlay: () => void;
  setCurrentTime: (time: number) => void;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
  increaseVolume: () => void;
  decreaseVolume: () => void;
  addEffect: (effect: string) => void;
  removeEffect: (effect: string) => void;
  addToFavorites: (effect: string) => void;
  removeFromFavorites: (effect: string) => void;
  addToRecent: (effect: string) => void;
}

export const useVideoStore = create<VideoState>()(
  persist(
    (set) => ({
      isPlaying: false,
      currentTime: 0,
      duration: 20, // 20 seconds
      speed: 80, // 80%
      volume: 100, // 100%
      appliedEffects: appliedEffects,
      favorites: [],
      recentEffects: [],
      
      togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
      
      setCurrentTime: (time) => set({ currentTime: time }),
      
      increaseSpeed: () => set((state) => ({ 
        speed: Math.min(state.speed + 10, 200) 
      })),
      
      decreaseSpeed: () => set((state) => ({ 
        speed: Math.max(state.speed - 10, 10) 
      })),
      
      increaseVolume: () => set((state) => ({ 
        volume: Math.min(state.volume + 10, 100) 
      })),
      
      decreaseVolume: () => set((state) => ({ 
        volume: Math.max(state.volume - 10, 0) 
      })),
      
      addEffect: (effect) => set((state) => ({
        appliedEffects: [...state.appliedEffects, effect]
      })),
      
      removeEffect: (effect) => set((state) => ({
        appliedEffects: state.appliedEffects.filter(e => e !== effect)
      })),
      
      addToFavorites: (effect) => set((state) => ({
        favorites: [...state.favorites, effect]
      })),
      
      removeFromFavorites: (effect) => set((state) => ({
        favorites: state.favorites.filter(e => e !== effect)
      })),
      
      addToRecent: (effect) => set((state) => {
        const newRecent = [effect, ...state.recentEffects.filter(e => e !== effect)].slice(0, 10);
        return { recentEffects: newRecent };
      }),
    }),
    {
      name: 'video-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ 
        favorites: state.favorites,
        recentEffects: state.recentEffects
      }),
    }
  )
);