var path = require('path');

module.exports = {
    entry: './src/handlers.ts',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        libraryTarget: 'commonjs',
        path: `${__dirname}/out`,
        filename: 'handlers.js'
    },
};