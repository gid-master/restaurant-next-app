export const isIOS = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }

    if (!navigator) {
        return false;
    }

    const devices: string[] = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
    const mac: boolean = navigator.userAgent.includes('Mac') && 'ontouchend' in document;
    return devices.includes(navigator.platform) || mac;
};

export const isApplicationInstalled = (): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(display-mode: standalone)').matches;
};

export const isDevelopmentMode = (): boolean => Boolean(process.env.NODE_ENV === 'development');

export const vapIdKey = (): Uint8Array => {
    if (typeof window === 'undefined') {
        return null;
    }

    const key: string = process.env.NEXT_PUBLIC_VAPID;
    const padding = '='.repeat((4 - (key.length % 4)) % 4);
    const base64 = (key + padding).replace(/-/g, '+').replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};
