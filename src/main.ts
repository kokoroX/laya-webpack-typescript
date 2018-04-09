import { Demo } from './demo'

// 程序入口
class GameMain{
  constructor()
  {
      Laya.init(750,1334);
      Laya.stage.screenMode = 'vertical';
      Laya.loader.load('res/atlas/ui.atlas', Laya.Handler.create(this, this.init), null, Laya.Loader.ATLAS)
  }

  init () {
      new Demo();
  }
}
new GameMain();
