module.exports = {
    presets:[
      ["@babel/env"],
      "@babel/preset-react"
    ],    
    plugins:[
      "@babel/plugin-transform-regenerator",
      ["transform-class-properties", { spec: true }],
      ["babel-plugin-transform-builtin-extend", {
        globals: ["Error", "Array"]
      }],
      ["@babel/plugin-transform-runtime"/*,{useESModules: true, helpers: true }*/],
      "@babel/plugin-proposal-class-properties",
      "transform-object-rest-spread"
    ],
    //ignore:[/node_modules/] //["/[\/\\]core-js/", "/@babel[\/\\]runtime/"]
  }
