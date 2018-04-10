const { Handler, Sprite } = Laya
import ui from './ui/layaUI.max.all';

// 程序入口
class GameMain{

  constructor () {
    Laya.init(750,1334);
    Laya.stage.screenMode = 'vertical';
    Laya.loader.load('res/atlas/comp.atlas', Laya.Handler.create(null, this.init), null, Laya.Loader.ATLAS)
  }

  init () {
    const demoPage = new ui.DemoPageUI()
    Laya.stage.addChild(demoPage)
    const sprite = new Laya.Sprite()
    sprite.loadImage('comp/bg.png')
    demoPage.addChild(sprite)
  }
}
new GameMain();
