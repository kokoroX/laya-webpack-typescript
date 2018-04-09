
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class DemoPageUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334}};
        constructor(){ super()}
        createChildren():void {

            super.createChildren();
            this.createView(ui.DemoPageUI.uiView);

        }

    }
}
