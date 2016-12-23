/* ===================================

	Main JS document for my-app.html

======================================*/

// for this project, will use the MVC sample defined here : https://alexatnet.com/articles/model-view-controller-mvc-javascript 

// import {main} from '../app.js';
// extend these as new objects from the main MVC in app.js in the future for commonly used functions

	var menuButton = document.querySelector('#menuButton');

	/* ===================================

		Model

	======================================*/

		 function appModel(controller){

		 	this._drawerState = false;

		};

	/* ===================================

		View

	======================================*/

		appView = {

			// calls other MVC inits
			drawer : document.querySelector('#drawer'),
			menuButton : document.querySelector('#menuButton')


		};
		

		openDrawer = new appController()._openDrawer(appView.menuButton,appView.drawer );
	/* ===================================

		Controller

	======================================*/

		function appController(){

			// handles the event to open the application menu
			this._openDrawer = function (menuButton, drawer){
				// handles the actual event to open the menu 
				menuButton.addEventListener('tap', function(drawerState){
				   drawerState = model._drawerState;
				   drawerOpened = new _stateChange(drawerState);
				   if (drawerState === true) {
				   		drawer.open();
				   		console.log('opened!');
				   }

				   else {
				   		drawer.close();
				   		console.log('closed!');
				   }
				}); 
			};

			// handles the event to set model states
			this._stateChange = function (modelElement){
				 modelElement = true;
			};
		};