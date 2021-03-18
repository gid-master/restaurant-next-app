import { SyntheticEvent } from 'react';

export const formatCurrency = (value: number): string => {
    const val = (value / 1).toFixed(2).replace('.', ',');
    return `US$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

export const formatCapitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const formatImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '/assets/fallback.png';
};
