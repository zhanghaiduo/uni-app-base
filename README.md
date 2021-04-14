# wjh-uni-demo
## UI 框架
使用的是uni-app为基础框架https://uniapp.dcloud.io/， UI框架 https://www.uviewui.com/ 
以及wjh-uni-common公共库  安装不上需要注册 npm i wjh-uni-common --registry http://172.30.1.32:9527
## 目录结构
```bash
├── .vscode                    # 统一VS code 配置
├── dist                       # 打包文件
├── node_modules               # 包
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── pages                  # 页面
│   ├── static                 # 静态文件
│   │   ├── images             # 图片
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── manifest.js            # 配置
│   └── pages.js               # 路由等
│   └── prototypeFn.js         # 原型方法
│   └── uni.scss               # 默认样式文件
├── .eslintignore              # eslintignore
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git 忽略
├── babel.config               # babel.config
├── jsconfig.json              # 编辑器跳转配置
├── package-lock.json          # package-lock.json
├── package.json               # package.json  
├── README                     # 自述文件  
└── tsconfig.json              # 编辑器跳转配置 
## Project setup
```
npm install
```

### 运行开发小程序
```
npm start

```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
