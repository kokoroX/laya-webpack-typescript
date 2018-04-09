function layaResolve(file) {
  return './bin/libs/' + file
}

const entry = [
  // 核心包，封装了显示对象渲染，事件，时间管理，时间轴动画，缓动，消息交互,socket，本地存储，鼠标触摸，声音，加载，颜色滤镜，位图字体等
  'laya.core.js',
  // 封装了webgl渲染管线，如果使用webgl渲染，可以在初始化时调用Laya.init(1000,800,laya.webgl.WebGL)
  'laya.webgl.js',
  // 提供tileMap解析支持
  'laya.tiledmap.js',
  // 提供了制作UI的各种组件实现
  'laya.ui.js',
  // 包含更多webgl滤镜，比如外发光，阴影，模糊以及更多
  // 'laya.filter.js',
  // 封装了html动态排版功能
  // 'laya.html.js',
  // 粒子类库
  // 'laya.particle.js',
  // 是动画模块，包含了swf动画，骨骼动画等
  // 'laya.ani.js',
  // 提供了微信小游戏的适配
  // 'laya.wxmini.js'
].map(layaResolve)

module.exports = {
  entry
}
