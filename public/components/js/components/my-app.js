"use strict";function appController(){appView,appModel;this._openDrawer=function(e){e.addEventListener("tap",function(){drawer.toggle()})},this._stateChange=function(e){e=!0}}appModel={drawerState:!1},appView={drawer:document.querySelector("#drawer"),menuButton:document.querySelector("#menuButton")},openDrawer=(new appController)._openDrawer(appView.menuButton);