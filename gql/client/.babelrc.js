const config = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": true}, "antd"],
  ]
};
if (process.env.NODE_ENV === "production") {
  config.presets.push(
    [
      "minify",
      {
        removeConsole: true
      }
    ]
  )
}
module.exports = config;