/* ===================================

  JS document to handle train schedules

======================================*/

// for this project, I will stick to jQuery to grab JSON data
// I will need to ask a bunch of questions about json filters, as I could not filter much data and instead created many JSON files

/* ===================================

    Model

======================================*/

    // Holds the stop_times JSON object
    var stop_times;

    // holds the values of the route options
    var rFromVal;
    var rToVal;

    // holds the station text for the route options
    var rFromText;
    var rToText;

    // holds the values of the schedule times
    var fromTime;
    var toTime;

    // holds the values of filtered data
    var checkFromValues;
    var checkToValues;

/* ===================================

    View

 ======================================*/

    /* fetches JSON
    $.getJSON("./components/json/stop_times.json", function(data){
          stop_times = data;
          // console.log(stop_times);
      }); */

    // sets variables for containers
    var dates = $('#dates');
    var dir = $('#direction');
    var nb = $('#nb');
    var sb = $('#sb');
    var sDisplay = $('#sDisplay');
    var sFromTime = $('#sFromContainer .sTimeContainer');
    var sFromStation = $('#sFromContainer .sStationContainer');
    var sToTime = $('#sToContainer .sTimeContainer');
    var sToStation = $('#sToContainer .sStationContainer');
    var sContainer = $('#sDisplay');


    // sets variables for route select elements
    var nbFrom = $('#northBoundFrom');
    var nbTo = $('#northBoundTo');
    var sbFrom = $('#southBoundFrom');
    var sbTo = $('#southBoundTo');

    //sets variables for general elements
    var sButton = $('#disSchedules');

/* ===================================

    Controller

======================================*/
    // displays direction inputs after dates have been selected
    dates.change(function(data){

      // sets the value of the date inputs
      var datesValue = dates.val();
      
      switch(datesValue) {

        case "WEEK":
        
        dir.removeClass('hidden');

        // fetches JSON
        $.getJSON("./components/json/stops_week.json", function(data){
              stop_times = data;
              console.log(stop_times);
        });

          break;

        case "SAT":

        dir.removeClass('hidden');
        
        //fetches JSON
        $.getJSON("./components/json/stops_sat.json", function(data){
              stop_times = data;
              console.log(stop_times);
        });    

          break;

        case "SUN":

        dir.removeClass('hidden');

        //fetches JSON
        $.getJSON("./components/json/stops_sun.json", function(data){
              stop_times = data;
              console.log(stop_times);
        });

            break;

        default:
            dir.addClass('hidden');
            this.hideSchedule = new handleDisplay(sButton, sContainer, true)
            this.hideRoutes = new handleDisplay(sb, nb, true);
    }

    });

    // grabs the correct input for the schedules
    dir.change(function(data){
      
      // sets the value of the from route
      var dirValue = dir.val();

      // creates if handlers for route display
      if (dirValue === "NB") {
        this.nbHandle = new handleDisplay(nb, sb, false);
        this.nbButton = new handleDisplay(sButton, sContainer, false);
        this.nbFetch = new fetchTimes(nbFrom, nbTo);
        this.showClearButton = new handleScheduleButton("clear and hide");

      }
      else if (dirValue === "SB") {
        this.sbHandle = new handleDisplay(sb, nb, false);
        this.sbButton = new handleDisplay(sButton, sContainer, false);
        this.sbFetch = new fetchTimes(sbFrom, sbTo);
        this.showClearButton = new handleScheduleButton("clear and hide");
      }
      else {
        this.routesHandle = new handleDisplay(sb, nb, true);
        this.sButtonHandle = new handleDisplay(sButton, sContainer, true);
        this.showClearButton = new handleScheduleButton("clear and hide");
      }
    });

    // creates the constructor for fetching route times
    function fetchTimes(routeFrom, routeTo){
      
      // creates the handler for when the schedule button is clicked
      sButton.click(function(){
      

          // odd clicks
          // handles fetching of stop from data
          this.clearSchedule = new handleScheduleButton("clear");
          // sets the values of each stop value
          var rFromVal = routeFrom.children("option").filter(":selected").attr("alt");
          var rFromText = routeFrom.children("option").filter(":selected").text();
          
          // creates the object for fetching the appropriate JSON data
          var routeFromFetch = new routeTimes(stop_times, rFromVal, rFromText, sFromTime, sFromStation);
        
        // handles fetching stop to data
          // sets the values of each stop value
          var rToVal = routeTo.children("option").filter(":selected").attr("alt");
          var rToText = routeTo.children("option").filter(":selected").text();

          // creates the object for fetching the appropriate JSON data
          var routeToFetch = new routeTimes(stop_times, rToVal, rToText, sToTime, sToStation);

          // handles data render filtering
          // will need to refactor this 
          checkFromValues = {}
          $('#sFromContainer .sTimeContainer > span.sTime').each(function() {
              var txt = $(this).text();
              if (checkFromValues[txt])
                  $(this).remove();
              else
                  checkFromValues[txt] = true;
          });
          checkToValues = {}
          $('#sToContainer .sTimeContainer > span.sTime').each(function() {
              var txt = $(this).text();
              if (checkToValues[txt])
                  $(this).remove();
              else
                  checkToValues[txt] = true;
          });

          $("#sFromContainer .sTimeContainer > span:gt(30)").remove();
          $("#sFromContainer .sStationContainer > span:gt(30)").remove(); 
          $("#sToContainer .sTimeContainer > span:gt(30)").remove();
          $("#sToContainer .sStationContainer > span:gt(30)").remove(); 
          this.showClearButton = new handleScheduleButton();
      
      });
      
      // sets option disabler
      this.optionDisable = new disableOptions(routeFrom, routeTo);

      // handles button state when from option state
      routeTo.change(function(){

        // sets the value of the date inputs
        var rToValue = routeTo.children("option").filter(":selected").attr("alt");
        
        switch(rToValue) {

          case "none":
            this.disableBttn = new handleScheduleButton("disabled and hidden");
            break;

          default:
            this.enableBttn = new handleScheduleButton("show button");
        };
      });
    };

    // creates constructor for fetching route times
    function routeTimes(JSON, rValue, rText, timeContainer, stationContainer){

      $.each(JSON[rValue], function (key, value) {
          console.log(value.arrival_time);
          console.log(rText);
          stationContainer.append($("<span></span>").attr("class", "sStation bus-schedule").text(rText));
          timeContainer.append($("<span></span>").attr("class", "sTime bus-schedule").text(value.arrival_time));
      });
          
    };

    // creates the constructor for setting element display
    function handleDisplay(showEl, hideEl, hideBoth){
        if (hideBoth === true) {
          showEl.addClass('hidden');
          hideEl.addClass('hidden');
        } else {
          showEl.removeClass('hidden');
          hideEl.addClass('hidden');
        }
    }; 
    
    // disable options fiddle =  http://jsfiddle.net/q7He9/2/
    // creates constructor for disabled options
    function disableOptions(from, to){
      from.on('change', function(){
          var self = this;
          to.find('option').prop('disabled', function(){
              return this.value < self.value;
          });
      });
    };

    // handle schedule and button states
    function handleScheduleButton(state){
        switch(state) {
          case "disabled and hidden":
            sButton.prop('disabled', true);
            sButton.addClass('disabled');
            sButton.addClass('disabled');
            sContainer.addClass('hidden');
            sButton.html('Load Schedules');
            sContainer.find('span').remove().end();
            break;
          case "disable":
            sButton.prop('disabled', true);
            sButton.addClass('disabled');
            sButton.addClass('disabled');
            sButton.html('Load Schedules');
            break;
          case "hidden":
            sButton.addClass('hidden');
            sContainer.addClass('hidden');
            sContainer.find('span').remove().end();
            break;
          case "show both":
            sButton.removeAttr('disabled');
            sButton.removeClass('disabled');
            sContainer.removeClass('hidden');
            sContainer.find('span').remove().end();
            break;
          case "show button":
            sButton.removeAttr('disabled');
            sButton.removeClass('disabled');
            break;
          case "clear and hide":
            sContainer.find('span').remove().end();
            sContainer.addClass('hidden');
            sButton.html('Load Schedules');
            break;
          case "clear":
            sContainer.find('span').remove().end();
            break;
          default:
            sButton.html('Refresh Schedules');
            sButton.removeAttr('disabled');
            sButton.removeClass('disabled');
            sContainer.removeClass('hidden');
        };
    };
