import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import WebPackDevServer from 'webpack-dev-server';
import { Schema } from './data/schema'; 

const APP_PORT = 3000;
const GRAPHQL_SERVER = 8080;

//GraphQL Server
const graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));
graphQLServer.listen(GRAPHQL_SERVER, () => console.log(`Running server at localhost:${GRAPHQL_SERVER}`));

//Relay
const compiler = webpack({
    entry: ['whatwg-fetch', path.resolve(__dirname, 'src', 'App.js')],
    module: {
        loaders: [
            {
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/,
            },
        ],
    },
    output: {filename: 'App.js', path: '/'}
});

const app = new WebPackDevServer(compiler, {
    contentBase: '/public/',
    proxy: {'/graphql': `http://localhost:${GRAPHQL_SERVER}`},
    publicPath: '/src/',
    stats: {colors: true},
});

app.use('/', express.static(path.resolve(__dirname, 'public')));
app.listen(APP_PORT, () => console.log(`App is now running on localhost:${APP_PORT}`));