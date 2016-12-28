/* ===================================

	Main JS document for my-app.html

======================================*/

// for this project, will use the MVC sample defined here : https://alexatnet.com/articles/model-view-controller-mvc-javascript 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB ON!')
});
// import {main} from '../app.js';
// extend these as new objects from the main MVC in app.js in the future for commonly used functions


	/* ===================================

		Model

	======================================*/

		 appModel = {

		 	drawerState : false,

		};



	/* ===================================

		View

	======================================*/

		appView = {

			// calls other MVC inits
			drawer : document.querySelector('#drawer'),
			menuButton : document.querySelector('#menuButton')

		};

		openDrawer = new appController()._openDrawer(appView.menuButton);


	/* ===================================

		Controller

	======================================*/

		function appController(){
			var view = appView;
			var model = appModel;
			var controller = this;
				
			// handles the event to open the application menu
			this._openDrawer = function (button){

				// handles the actual event to open the menu 
				button.addEventListener('tap', function(){

					/* attempt to update model not working too well, scrapping until later date
				   var modelState = model.drawerState;
				   drawerOpened = new controller._stateChange(modelState);

				   if (modelState == true) {
				   		drawer.open();
				   		console.log('opened!');
				   }

				   else {
				   		drawer.close();
				   		console.log('closed!');
				   }*/

				   drawer.toggle();
				}); 
			};

			// handles the event to set model states
			this._stateChange = function (modelElement){
				 modelElement = true;
			}; 
		};