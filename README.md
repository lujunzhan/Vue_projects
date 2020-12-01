<!--
 * @Descripttion: 
 * @version: 
 * @Author: LJZ
 * @Date: 2020-08-02 21:58:09
 * @LastEditTime: 2020-12-01 20:07:20
-->
# Vue_projects
本存储库为本人使用Vue框架制作的一些项目

1.项目一
<div>
<h2>todos网页应用界面</h2>
<img src="https://csgduanzhou-pic.oss-cn-shenzhen.aliyuncs.com/my_self/todos_cover.png" style="width:50%;height:50%" alt='todos项目封面'>
</div>

版本：Vue-cli2 | 需安装好node环境 | 需安装Vue-cli2脚手架

**cmd命令行中使用如下命令启动**
```
npm run dev
```

##### 打包部署
方法一：可以直接把项目中的`dist`文件夹改名为`todo`放到服务器目录下
  已经配置好可以运行，当然打开会是白屏的。

方法二：或者重新打包
需要修改router/index.js文件 => base:'/你的项目名/',并更改项目名为你修的项目名，便可以打包部署于服务器下
```
//打包命令
npm run build 
```

