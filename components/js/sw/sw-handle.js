/* ===================================

	SW handle 

======================================*/

	// does not register service worker if unsupported
      if (!navigator.serviceWorker) {

      } 

    // registers SW
      else if('serviceWorker' in navigator) 
      {
		window.addEventListener('load', function() {
          navigator.serviceWorker.register('/service-worker.js');
        });
      }