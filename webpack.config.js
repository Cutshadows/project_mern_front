const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const webpack=require('webpack');


module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/',
    },
    resolve:{
        alias:{
            components: path.resolve(__dirname, 'src/components/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            hook: path.resolve(__dirname, 'src/hooks/'),
            style: path.resolve(__dirname, 'src/assets/styles/'),
            context: path.resolve(__dirname, 'src/context/')
            //img: path.resolve(__dirname, 'src/assets/img/')
        },
        extensions:['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpg|png|svg)$/,
                use:[
                    {
                        'loader':'file-loader',
                        options:{
                            name:'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        open:true,
        port:3000
    },
    plugins:[
        new HtmlWebPackPlugin(
            {   
                template:'./public/index.html',
                filename:'./index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename:'assets/styles/[name].css'
            }
        )
    ]
}