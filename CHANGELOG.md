** Changelog for Event Planning Application

v0.9
- clean up styles on responsive and mobile dimensions
- refactor production code
- test production
- prototype to cache image offline

v0.8
- display schedule data
- displaying all data except for the image offline, need to fix

v0.75
- refactored GTFS data, generated train stop times
- added jQuery functionality to manipulate GTFS data
- added HTML / CSS to display GTFS data

v0.7
- fixed git conflict problem
- added HTML, CSS and images to each view
- added bus-schedule jQuery to manipulate json data


v0.6
- SCRAPPED EMC6 DUE TO CONFLICT WITH VULCANIZE
- fixed gulp public pipe, to only publish essential files.
- files not vulcanize over to the /public directory when saved, site will now be tested via public folder.
- attempted to add MongoDB, scrapped due to high learning curve and time commitment needed at this point.
- converted all but stop time GTFS csv's into JSON's to use for the app
- will need to shorten the stop_time.csv before 

v0.5
- app minimized, vulcanized, and cocat' ready for offline caching
- public version of the app works offline completely, success!
- still need to cache any future images. 
- connection states to be added last if at all

v0.4
- registered service worker and cache
- revised title, menu, and content layout on mobile dimensions
- structured gulp pipe so it vulcanizes app correctly, running into some errors with the views will revise
- fixed CSS toolbar, menu, and connection state styles
- 

v0.3
- added basic JS functionality for menu, and disabled shadow-dom
- revised and fixed MVC JS structure
- added CSS fixes to page layout, open menu, and menu inputs
- further refactored the polymer starter kit

v0.2
- changed UI to fit project direction
- added base MVC model for app.js and my-app.js
- added polymer UI components to app, and bower.json
- styled some UI elements to better fit project direction

V0.1
- base version created.
- added dependency files, and gulp dependencies.
- scrapped custom theme ideas, will change colors later