import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.babel';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

const port = process.env.port || 5000;

let helloMessage = `this server is running on port ${port}`;

console.log(helloMessage);

app.listen(port, () => console.log('working'));
