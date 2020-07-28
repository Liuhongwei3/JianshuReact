const {override, fixBabelImports, addWebpackExternals, setWebpackPublicPath} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addWebpackExternals({
      'styled-components': "StyledComponents",
      'axios': "axios",
      'react': 'React',
      'react-dom': 'ReactDOM',
      "react-router-dom": "ReactRouterDOM",
      'antd': "antd",
      'immutable': "immutable",
      'redux': "redux",
      'react-redux': "ReactRedux",
      'react-loadable': "ReactLoadable"
    })
);