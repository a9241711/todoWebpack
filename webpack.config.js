const path=require("path");
module.exports={
    //建置模式
    mode:"development",//預設production
    //入口
    entry:"./src/index.js",
    //輸出
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    //devServer
    devServer:{
        static:"./dist"
    },
    //模組載入規則
    module:{
        rules:[
            //css樣式載入規則
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
            //babel
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
}