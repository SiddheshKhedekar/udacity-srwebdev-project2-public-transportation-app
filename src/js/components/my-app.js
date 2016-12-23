/* ===================================

	Main JS document for my-app.html

======================================*/

// for this project, will use the MVC sample defined here : https://alexatnet.com/articles/model-view-controller-mvc-javascript 

import {main} from '../app.js';


	/* ===================================

		Model

	======================================*/

		 function AppModel(controller){

		};

	/* ===================================

		View

	======================================*/

		function AppView(model, controller){

			// calls other MVC inits
			this._controller = AppController;
			this._elements = {

			}

		};

	/* ===================================

		Controller

	======================================*/

		function AppController(view, model){

			// calls other MVC inits
			this._view = AppView;

			this._OpenDrawer = function (drawer){

			};
		};

export default main;