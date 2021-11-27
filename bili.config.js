module.exports = {
    banner: true,
    input: 'src/main.js',
    output: {
        dir: 'dist',
        fileName: 'index.js',
        extractCSS: false,
    },
    plugins: {
        vue: {
            css: true
        }
    }
};