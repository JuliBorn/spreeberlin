module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en-US', 'de'],

        defaultLocale: 'de',
        publicPath: function (locale) {
            if (locale === 'en-US') {
                return '/';
            }
            return '/';
        },
    },
};
