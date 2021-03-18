const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        swSrc: 'service-worker.js',
        sw: 'service-worker.js',
        dest: 'public'
    }
});
