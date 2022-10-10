const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "stko",
    projectName: "spa-utility-module",
    webpackConfigEnv,
    argv,
  });

  console.log(defaultConfig);

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
