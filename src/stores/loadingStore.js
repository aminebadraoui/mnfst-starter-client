import { create } from 'zustand';

const useLoadingStore = create((set, get) => ({
    loadedObjects: {
        vantaBackground: false,
        // Add more objects here as needed
    },
    setObjectLoaded: (objectName) => {
        set((state) => ({
            loadedObjects: {
                ...state.loadedObjects,
                [objectName]: true,
            },
        }));
        get().checkIfFullyLoaded();
    },
    isFullyLoaded: false,
    checkIfFullyLoaded: () => {
        const allLoaded = Object.values(get().loadedObjects).every(Boolean);
        set({ isFullyLoaded: allLoaded });
        return allLoaded;
    },
}));

export default useLoadingStore;