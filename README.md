## Jianshu_React
> 使用 react 模仿简书 web 端界面

## 技术栈
- react
- react-router-dom
- react-redux
- redux-thunk(redux-saga)
- immutable
- react-loadable
- axios
- styled-components
- normalize
- antd

## 优化
- react-loadable
- webpack
```js
const shouldUseSourceMap = false;

externals: {
  'axios': "axios",
  'react': 'React',
  'react-dom': 'ReactDOM',
  "react-router-dom": "ReactRouterDOM",
  'antd': "antd",
  'immutable': "Immutable",
  'redux': "Redux",
  'react-redux': "ReactRedux",
}
```

## Get
> 通过小案例熟悉 react 开发，并结合各种框架工具进行性能优化.
> 本案例很明显地证实了 react 只是一个视图层框架，需要配合其他的框架或者工具来配合才能更快速有效地开发出一个高质量的 web application.