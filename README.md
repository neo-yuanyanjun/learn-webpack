这是[原文地址 - 入门Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f# "入门Webpack，看这篇就够了")

[英文原版地址](http://www.pro-react.com/materials/appendixA/, "webpack for react")

## 其他webpack入门介绍文章
> [webpack学习之路](https://github.com/wangning0/Autumn_Ning_Blog/blob/master/blogs/3-12/webpack.md, "webpack学习之路")  
> [webpack 入门指南](http://www.w2bc.com/Article/50764, "webpack 入门指南")  
> [webpack编译流程漫谈](https://github.com/slashhuang/blog/issues/1, "webpack编译流程漫谈")  
> [Webpack学习总结](https://diamont1001.github.io/webpack-summary/, "Webpack学习总结")  

另外一篇关于.gitignore配置文件语法说明[Git 的 .gitignore 配置](http://www.cnblogs.com/haiq/archive/2012/12/26/2833746.html "Git 的 .gitignore 配置")

这是一篇关于Markdown语法说明[Markdown 语法说明 (简体中文版) ](http://www.appinn.com/markdown/#link "Markdown 语法说明 (简体中文版) ")

webpack非全局安装的情况下，需要运行下面的命令
```shell
node_modules/.bin/webpack app/main.js public/bundle.js
```

```shell
# npm start 是个特殊脚本命令，可以在终端直接执行
npm start
# 如果要用npm执行其他脚本，必须用npm run
npm run {script name}
npm run build
```

### webpack-dev-server的用法
[官网](http://webpack.github.io/docs/webpack-dev-server.html "webpack-dev-server")
####### 用法
```shell
# 方式1
node_modules/.bin/webpack-dev-server
# 方式2
# 在package.json中配置脚本
npm run server
```

### webpack loader加载器
一篇相关文章[使用webpack loader加载器](http://www.cnblogs.com/leinov/p/5330944.html "使用webpack loader加载器")
##### loader中『！』符号的作用
```javascript
# 感叹号的作用在于使同一个文件可以使用不同的loader，如下
{
    test: /\.css$/,
    loader: 'style!css'
}
```
#### css相关
[css-loader官网](https://www.npmjs.com/package/css-loader, "css-loader")
[css-modules官网](https://github.com/css-modules/css-modules, "css-modules")
[postcss官网](https://github.com/postcss/postcss, "postcss")

#### 当运行shell脚本提示没有权限的时候
```shell
chmod u+x *.sh
```





