import path from 'path';
import nodeExternals from 'webpack-node-externals';
import MinifyPlugin from 'babel-minify-webpack-plugin';

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'source-map',
    target: 'node',
    externals: [nodeExternals()],
    stats: {
        colors: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new MinifyPlugin()
    ]
};
