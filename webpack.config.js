'use strict'

const webpack = require("webpack"),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    HtmlWebpackPlugin = require("html-webpack-plugin");

const
    project_root = __dirname + '/',
    assets_path = project_root + "assets/",
    src_path = project_root + "src/",
    paths = {
        src_sass: src_path + "sass/",
        src_js: src_path + "js/",
        css: assets_path + "css/",
        js: assets_path + "js/",
        src_html: src_path + "html/"
    }

module.exports = (env, argv) => { 
    const { mode } = argv;
    console.log(`Running with mode: ${mode}`);
    return {
        name: 'nobel_prizes',
        mode,
        entry: [paths.src_js+'index.js', paths.src_sass+'main.scss'],
        output: {
            path: assets_path,
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new HtmlWebpackPlugin({
                template: paths.src_html + "index.html",                
                filename: mode === 'production' ? '../laureates.html' : 'index.html'
            }),
        ],
        devServer: {
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(scss|sass|css)$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: false,
                            }
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                        ]
                },
            ],
        }
    }
}