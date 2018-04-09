// import Laya from 'laya'
const { loader, stage, Handler, Sprite } = Laya
// console.dir(Laya.loader, loader, stage)
// const demo = { a: 1 }
// const { a } = demo
// console.log(a)

// 程序入口
class GameMain{

  constructor () {
    Laya.init(750,1334);
    Laya.stage.screenMode = 'vertical';
    Laya.loader.load('res/atlas/comp.atlas', Laya.Handler.create(null, this.init))
  }

  init () {
    const demoPage = new ui.DemoPageUI()
    Laya.stage.addChild(demoPage)
    const sprite = new Laya.Sprite()
    sprite.loadImage('res/atlas/comp/pg.png')
    Laya.stage.addChild(sprite)
  }
}
new GameMain();
