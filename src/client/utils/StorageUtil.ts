import { CookieStorage } from 'cookie-storage';

const cookieStorage = new CookieStorage();

export const useCookie = {
    setItem: async <T>(key: string, value: T) => {
        cookieStorage.setItem(key, JSON.stringify(value));
    },

    getItem: async <T>(key: string): Promise<T> => {
        const data = cookieStorage.getItem(key);
        return data ? (JSON.parse(data) as T) : null;
    },

    removeItem: (key: string): void => {
        cookieStorage.removeItem(key);
    }
};

export const useLocalStorage = {
    setItem: async <T>(key: string, value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getItem: async <T>(key: string): Promise<T> => {
        const data = localStorage.getItem(key);
        return data ? (JSON.parse(data) as T) : null;
    },

    removeItem: (key: string): void => {
        localStorage.removeItem(key);
    }
};
