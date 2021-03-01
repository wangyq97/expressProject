const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const router = require('./router')

const app = express()

// 开放 public 静态资源  express.static 中间件  
app.use('/public/', express.static(path.join(__dirname,'./public')))


nunjucks.configure(path.join(__dirname, './view/') , {
    autoescape: true,
    express: app,
    // watch: true // 启用模板文件监视，建议开发阶段开启
});

// 加载路由模块
app.use(router)

app.listen(3000, () => {
    console.log('服务启动成功');
    console.log(`http://localhost:3000`);
})