const path =require("path");

module.exports = {

    mode: "development",
    entry: "./app/app.jsx", //entry point, main program source file
    output: {
        path: path.resolve(__dirname, "./_destination"), //path to destination files ( "_name" - may be problems in asp.net)
        publicPath: "/_destination/",
        filename: "react_script.js"   //filename
    },
    devServer: {
        historyApiFallback: true, //HTML5 History API
        static: {
            directory: path.join(__dirname, "/www_root/")  //path to static files
        },
        port: 8080,
        open: true
    },
    module: {
        rules: [  //loader for jsx
            {
                test: /\.jsx?$/,  //regex for file extension
                exclude: /(node_modules)/, //exclude node_modules directory
                loader: "babel-loader",
                options: {
                    presets: [ "@babel/preset-react" ]  //used plugins
                }
            }
        ]
    }

}