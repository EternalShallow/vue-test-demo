# vue 移动端项目demo、插件、案例集锦
> lib-flexible/flexible 淘宝rem适配方案px为实际的2倍，所以项目中使用的px比如说字体大小为12px 则在css中需写为24px，自动转成rem适配屏幕
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


文件目录结构

├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dist
│   │   └── css
│   │       ├── sprite.css
│   │       └── sprite.png
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   ├── proxyConfig.js
│   └── test.env.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── border.less
│   │   │   ├── cell.less
│   │   │   ├── flash.less
│   │   │   ├── fun.less
│   │   │   ├── main.less
│   │   │   └── picker.less
│   │   ├── images
│   │   │   ├── headImg.png
│   │   │   ├── member_card.png
│   │   │   ├── noService.png
│   │   │   └── timeCard
│   │   └── logo.png
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── confirm                 弹出框带确定和取消按钮的组件
│   │   │   ├── confirm.js
│   │   │   └── confirm.vue
│   │   └── toast                   toast组件
│   │       └── toast.vue
│   ├── main.js                     入口文件
│   ├── pages
│   │   ├── adapterScreen           屏幕适配
│   │   │   └── yixingScreen.vue    异形屏幕适配
│   │   ├── bookmark                书签效果实现
│   │   │   ├── images
│   │   │   └── index.vue
│   │   └── home
│   │       ├── index.vue
│   │       ├── tableOperation.vue
│   │       └── userHelp.vue
│   └── router
│       └── index.js
└── static
