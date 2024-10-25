module.exports = {
    globDirectory: './',
    globPatterns: [
        '**/*.{html,js,css,png,jpg,jpeg,svg,gif,ttf,woff,woff2,json}'
    ],
    swDest: './sw.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ]
};
