const path = require("path")
require("dotenv").config();

const Env = process.env.NODE_ENV;

module.exports = {
    entry: "./src/index.ts",
    mode: Env,
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
    rules: [
        {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        },
    ],
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js',

    }
}