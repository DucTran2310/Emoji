const path = require("path");
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@data": path.resolve(__dirname, "src/data")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
      }
    }
  }
};