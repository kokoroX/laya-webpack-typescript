export class Demo {
  private startY: number = 680;
  private startX: number = Laya.stage.width / 2
  private boxSpaceX: number = 0;
  private boxSpaceY: number = 0;
  private direction: number = 1;
  private zIndex: number = 9999999;
  private player: Laya.Sprite;

  constructor () {
      this.init()
      Laya.stage.on(Laya.Event.MOUSE_DOWN, this, () => {
          this.direction = 1
      })
  }

  init () {
      this.render()
      Laya.timer.frameLoop(1, this, () => {
          Laya.stage.y++

          if (!this.direction) {
              this.player.y--
              this.player.x++
          } else {
              this.player.y--
              this.player.x--
          }
      })

      // const sprite = new Laya.Sprite()
      // sprite.loadImage('ui/box-sheet0.png')
      // sprite.y = this.startY
      // sprite.x = this.startX
      // sprite.zOrder = 2

      // const sprite1 = new Laya.Sprite()
      // sprite1.loadImage('ui/box-sheet0.png')
      // sprite1.y = this.startY - sprite1.height / 2 + 10
      // sprite1.x = this.startX + sprite1.width / 2 - 5
      // sprite.zOrder = 1
      // // const sprite = Laya.Loader.getRes('box-sheet0.png')
      // Laya.stage.addChild(sprite)
      // Laya.stage.addChild(sprite1)
  }

  render () {
      this.renderPlayer()
      this.createLine(10)
      this.direction = 0
      this.createLine(10)
  }

  renderPlayer () {
      const player = new Laya.Sprite()
      player.loadImage('ui/player-sheet0.png')
      player.x = this.startX + 10
      player.y = this.startY + 20
      player.zOrder = this.zIndex + 1
      Laya.stage.addChild(player)
      this.player = player
  }

  execute (count: number, callback: Function) {
      let index = 0
      while (index < count) {
          callback(index)
          index++
      }
  }

  createLine (count: number) {
      this.execute(count, index => {
          if (this.direction) {
              this.startX += this.boxSpaceX
              this.startY -= (this.boxSpaceY - 6)
              // const x = this.startX + index * this.boxSpaceX
              // const y = this.startY - index * (this.boxSpaceY - 6)
              const z = 3 - index
              this.createBox(this.startX, this.startY, z)
          } else {
              this.startX -= this.boxSpaceX
              this.startY -= (this.boxSpaceY - 6)
              // const x = this.startX - index * this.boxSpaceX
              // const y = this.startY - index * (this.boxSpaceY - 6)
              const z = 3 - index
              this.createBox(this.startX, this.startY, z)
          }
      })
  }

  createBox (x, y, z) {
      const sprite = new Laya.Sprite()
      sprite.x = x
      sprite.y = y
      sprite.zOrder = this.zIndex--
      sprite.loadImage('ui/box-sheet0.png')
      Laya.stage.addChild(sprite)

      if (!this.boxSpaceX) {
          this.boxSpaceX = sprite.width / 2
          this.boxSpaceY = sprite.height / 2
      }
  }
}
