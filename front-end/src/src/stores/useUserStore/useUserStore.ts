import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { UserStoreTypes } from './user-store.types';

export const useUserStore = create<UserStoreTypes>()(
  persist(
    (set) => ({
      tokenPayload: null,
      isLogged: false,
      setTokenPayload: (tokenPayload) => set({ tokenPayload }),
      setIsLogged: (isLogged) => set({ isLogged }),
      lodOut: () => set({ tokenPayload: null, isLogged: false }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
