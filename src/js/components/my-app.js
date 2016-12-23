/* ===================================

	Main JS document for my-app.html

======================================*/

// for this project, will use the MVC sample defined here : https://alexatnet.com/articles/model-view-controller-mvc-javascript 

// import {main} from '../app.js';
// extend these as new objects from the main MVC in app.js in the future for commonly used functions

	/* ===================================

		Model

	======================================*/

		 function appModel(controller){

		 	this._drawerState = false;

		};

	/* ===================================

		View

	======================================*/

		function appView(controller){

			// calls other MVC inits
			this._controller = appController;
			this._elements = {
				drawer : document.querySelector('#drawer'),
				menuButton: document.querySelector('#menuButton')
			};


		};

	/* ===================================

		Controller

	======================================*/

		function appController(view, model){

			// calls other MVC inits
			this.view = appView;
			this.model = appModel;

			// handles the event to open the application menu
			this._openDrawer = function (){

				// handles the selectors to open drawer
				var menuButton = view._elements.menuButton;
				var drawer = view._elements.drawer;

				// handles the actual event to open the menu 
				menuButton.addEventListener('tap', function(){
				   drawerOpened = new _stateChange(model._drawerState);
				   if (drawerOpened === true) {
				   		drawer.toggle();
				   }
				}); 
			};

			// handles the event to set model states
			this._stateChange = function (modelElement){
				 modelElement = true;
			};
		};

export default my-app;