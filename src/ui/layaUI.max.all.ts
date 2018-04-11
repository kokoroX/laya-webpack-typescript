
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class DemoPageUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Rect","props":{"y":426,"x":226,"width":300,"rotation":30,"pivotY":1,"pivotX":1,"lineWidth":1,"height":300,"fillColor":"#ff0000"}}]};
        constructor(){ super()}
        createChildren():void {

            super.createChildren();
            this.createView(ui.DemoPageUI.uiView);

        }

    }
}

export default ui