# pwa-demo

## Manifest.json

```
{
  "name": "新闻早知道", // 应用名称，用于安装横幅、启动画面显示
  "short_name": "新闻早知道", // 应用短名称，用于主屏幕显示
  "start_url": "./index.html", // 设置启动地址
  "theme_color": "#FFDF00", // 设置主题颜色，可以通过该属性来控制浏览器 UI 的颜色。比如 PWA 启动画面上状态栏、内容页中状态栏、地址栏的颜色，theme_color 所影响。
  "background_color": "#FFDF00", // 设置启动画面的背景颜色
  "display": "fullscreen", // 设置显示类型，可选取值：1.fullscreen 2.standalone 3.minimal-ui 4.browser
  "icons": [
    {
      "src": "./images/homescreen.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./images/homescreen-144.png",
      "sizes": "144x144",
      "type": "image/png"
    }
  ]
}
```