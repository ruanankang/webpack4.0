import _ from 'lodash'; // 1mb

// 业务代码 1mb
console.log(_.join(['a', 'b', 'c'], '&'));

// 打包后的bundle.js 2mb 很大

// 修改部分代码后，重新访问页面，又要加载bundle.js 2mb 很大
