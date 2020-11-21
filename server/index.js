// nodejs服务器

const express = require('express')
const Vue = require('vue')

// 创建express实例和vue实例
const app = express()
// 创建渲染器
const renderer = require('vue-server-renderer').createRenderer()

// 将来用渲染器渲染page得到html字符串
const page = new Vue({
  template: "<div>Hello</div>",
})
app.get('/:page', async (req,res) => {
  try {
    const html = await renderer.renderToString(page)
    res.send(html)
  } catch (error) {
    console.log(error);
    res.status(500).send('服务端出错了')
  }
})
app.listen(3000, () => {
  console.log('渲染服务器启动成功', 'http://localhost:3000/');
})






// Express 简介
// Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

// 使用 Express 可以快速地搭建一个完整功能的网站。

// Express 框架核心特性：

// 可以设置中间件来响应 HTTP 请求。

// 定义了路由表用于执行不同的 HTTP 请求动作。

// 可以通过向模板传递参数来动态渲染 HTML 页面。