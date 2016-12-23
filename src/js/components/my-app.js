/* ===================================

	Main JS document for my-app.html

======================================*/

// for this project, will use the MVC sample defined here : https://alexatnet.com/articles/model-view-controller-mvc-javascript 

// import {main} from '../app.js';


	/* ===================================

		Model

	======================================*/

		 function appModel(controller){

		 	this._drawerState = false;

		};

	/* ===================================

		View

	======================================*/

		function appView(model, controller){

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

			this._openDrawer = function (){
				menuButton = _view._elements.menuButton;
				menuButton.addEventListener('tap', function(){
				   drawerOpened =  new _stateChange(model._drawerState)
				}); 
			};

			this._stateChange = function (modelElement){
				 modelElement = true;
			};
		};

export default main;