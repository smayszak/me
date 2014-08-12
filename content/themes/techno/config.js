var theme =
{
    logo: '[YOUR LOGO]',
    author: {
        github: 'https://github.com/smayszak',
        twitter: 'https://twitter.com/smayszak',
        linkedin: 'http://linkedin.com/in/stevemayszak',
        email: 'mailto:stevemayszak@gmail.com'
    },
    disqus: {
        shortname: 'steve m'
    },
    google: {
        analytics: {
            account: '[YOUR GA ACCOUNT]',
            domain: '[YOUR GA DOMAIN]'
        }
    },

    menu: [
        { route: '', text: 'Home'},
        { route: '/about', text: 'About'},
        { route: '/projects', text: 'Projects'}
    ]
}

// Export config
module.exports = theme;