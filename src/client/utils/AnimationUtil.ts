// t = current time
// b = start value
// c = change in value
// d = duration
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;

    if (t < 1) {
        return (c / 2) * t * t + b;
    }

    // eslint-disable-next-line no-plusplus
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};

// doesn't work on ios devices, works only for web
const nativeScrollLeft = (element: HTMLElement, to = 0) => {
    element.scrollTo({ left: to, behavior: 'smooth' });
};

// auxiliar vanila script to have a smooth scroll across all devices
const customScrollLeft = (element: HTMLElement, to = 0) => {
    const duration = 300;
    const start: number = element.scrollLeft;
    const change: number = to - start;
    const startDate: number = +new Date();

    const animateScroll = () => {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollLeft = easeInOutQuad(currentTime, start, change, duration);
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            element.scrollLeft = to;
        }
    };

    animateScroll();
};

export const scrollToLeft = (element: HTMLElement, to = 0) => {
    const isMobileDevice: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobileDevice) {
        customScrollLeft(element, to);
    } else {
        nativeScrollLeft(element, to);
    }
};
