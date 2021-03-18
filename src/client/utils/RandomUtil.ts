export const getUid = (): string => Math.floor((1 + Math.random()) * 0x10000).toString();

export const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArbitrary = (min: number, max: number): number => Math.random() * (max - min) + min;

export const encodeData = (data: string): string => btoa(data);
