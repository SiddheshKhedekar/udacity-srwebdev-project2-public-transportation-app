// creates the empty variables where we will store our JSON data
var routes;
var stops;
var trips = {
   "16-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533513,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533514,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533515,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533516,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360348,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533517,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533518,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533519,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533520,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360348,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533521,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533522,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533523,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533524,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360348,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533525,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533526,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533527,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533528,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360348,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533529,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533530,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533531,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533532,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360348,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533533,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533534,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533535,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533536,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360348,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533537,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360373,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533538,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360347,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533539,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360345,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534712,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360361,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534713,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360361,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534714,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360361,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534715,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360361,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534716,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360361,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540434,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360618,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540435,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360780,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540436,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540437,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540438,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360618,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540439,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360780,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540440,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540441,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540442,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360618,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540443,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360780,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540444,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540445,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540446,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360618,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540447,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360780,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540448,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540449,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540450,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360618,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541039,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541291,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541292,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541293,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541294,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541295,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360783,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541301,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541303,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541305,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541306,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541309,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360619,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520103,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359532,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520106,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359532,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520108,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359730,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520111,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359730,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520113,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359610,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520116,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359610,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520117,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520118,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520119,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520120,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520121,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520122,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520123,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520124,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520125,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359213,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520151,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520152,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520153,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520154,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520155,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520156,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520157,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520158,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520159,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359164,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521561,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359282,
         "shape_id": 160009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521564,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359282,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521568,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359684,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521571,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359684,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521573,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359557,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521576,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359557,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521579,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359854,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521582,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359854,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523147,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359336,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523150,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4359336,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548035,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548036,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548037,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548038,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360918,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548039,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548040,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548041,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548042,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360918,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548043,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548044,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548045,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548046,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360918,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548047,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548048,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548049,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548050,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360918,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548051,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548052,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548053,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548054,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360918,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548055,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548056,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548057,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548058,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360918,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548059,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360943,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548060,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360917,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548061,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360915,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549234,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360931,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549235,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360931,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549236,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360931,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549237,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360931,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549238,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4360931,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556090,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361566,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556093,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361566,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556095,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361736,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556098,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361736,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556100,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361637,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556103,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361637,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556104,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556105,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556106,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556107,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556108,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556109,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556110,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556111,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556112,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361311,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556138,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556139,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556140,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556141,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556142,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556143,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556144,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556145,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556146,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361265,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557537,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361363,
         "shape_id": 160009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557540,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361363,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557544,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361700,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557547,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361700,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557549,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361591,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557552,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361591,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557555,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361844,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557558,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361844,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559074,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361401,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559077,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4361401,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569450,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362684,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569453,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362684,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569455,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362841,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569458,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362841,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569460,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362751,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569463,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362751,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569464,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569465,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569466,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569467,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569468,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569469,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569470,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569471,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569472,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362465,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569498,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569499,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569500,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569501,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569502,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569503,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569504,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569505,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569506,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362422,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570881,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362505,
         "shape_id": 160009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570884,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362505,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570888,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362807,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570891,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362807,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570893,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362708,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570896,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362708,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570899,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362939,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570902,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4362939,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572384,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363268,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572387,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363268,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582427,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363898,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582430,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363898,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582432,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364090,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582435,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364090,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582437,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363975,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582440,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363975,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582441,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582442,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582443,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582444,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582445,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582446,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582447,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582448,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582449,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363607,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582475,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582476,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582477,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582478,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582479,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582480,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582481,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582482,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582483,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363559,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583878,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363668,
         "shape_id": 160009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583881,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363668,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583885,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364044,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583888,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364044,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583890,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363923,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583893,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4363923,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583896,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364209,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583899,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364209,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585447,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364616,
         "shape_id": 160008
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585450,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4364616,
         "shape_id": 160008
      }
   ],
   "16-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307149,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307150,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307151,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307152,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342879,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307153,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307154,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307155,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307156,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342879,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307157,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307158,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307159,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307160,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342879,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307161,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307162,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307163,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307164,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342879,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307165,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307166,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307167,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307168,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342879,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307169,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307170,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307171,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307172,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342879,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307173,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342903,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307174,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342878,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307175,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308350,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342891,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308351,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342891,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308352,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342891,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308353,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342891,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308354,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4342891,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320251,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343411,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320252,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343413,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320253,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320254,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320255,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343411,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320256,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343413,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320257,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320258,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320259,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343411,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320260,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343413,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320261,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320262,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320263,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343411,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320264,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343413,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320265,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320266,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320267,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343411,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320856,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321175,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321176,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321177,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321178,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321179,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343446,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321185,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321187,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321189,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321190,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321193,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4343412,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167675,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330419,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167678,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330419,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167680,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330638,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167683,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330638,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167685,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330504,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167688,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330504,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167689,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167690,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167691,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167692,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167693,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167694,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167695,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167696,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167697,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330047,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167725,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167726,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167727,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167728,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167729,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167730,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167731,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167732,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167733,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4329876,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169146,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330134,
         "shape_id": 160009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169149,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330134,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169153,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330589,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169156,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330589,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169158,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330447,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169161,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330447,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169164,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330775,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169167,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330775,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170733,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330983,
         "shape_id": 160008
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170736,
         "trip_headsign": "PALLISER",
         "direction_id": 1,
         "block_id": 4330983,
         "shape_id": 160008
      }
   ],
   "39-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533596,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533597,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533598,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533599,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533600,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533601,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533602,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533603,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533604,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533605,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533606,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533607,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533608,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533609,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533610,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533611,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533612,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533613,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533614,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533615,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533616,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533617,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533618,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533619,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533620,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540470,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540471,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540472,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540473,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540474,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540475,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540476,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540477,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540478,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540479,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540480,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540481,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540482,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540483,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540484,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540485,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540486,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520102,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359532,
         "shape_id": 390013
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520105,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359532,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520110,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359730,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520115,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359610,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521452,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521453,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521454,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521455,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521456,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521457,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521458,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521459,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521460,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521461,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359104,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521563,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359282,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521566,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359282,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521567,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359684,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521570,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359684,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521572,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359557,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521575,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359557,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521578,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359854,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521581,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359854,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523149,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4359336,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548118,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548119,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548120,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548121,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548122,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548123,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548124,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548125,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548126,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548127,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548128,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548129,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548130,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548131,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548132,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548133,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548134,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548135,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548136,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548137,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548138,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548139,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548140,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548141,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548142,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556089,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361566,
         "shape_id": 390013
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556092,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361566,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556097,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361736,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556102,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361637,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557429,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557430,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557431,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557432,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557433,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557434,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557435,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557436,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557437,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557438,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557539,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361363,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557542,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361363,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557543,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361700,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557546,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361700,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557548,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361591,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557551,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361591,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557554,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361844,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557557,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361844,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559076,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4361401,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569449,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362684,
         "shape_id": 390013
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569452,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362684,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569457,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362841,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569462,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362751,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570775,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570776,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570777,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570778,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570779,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570780,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570781,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570782,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570783,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570784,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362366,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570883,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362505,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570886,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362505,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570887,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362807,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570890,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362807,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570892,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362708,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570895,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362708,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570898,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362939,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570901,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4362939,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572386,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363268,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582426,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363898,
         "shape_id": 390013
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582429,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363898,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582434,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4364090,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582439,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363975,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583771,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583772,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583773,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583774,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583775,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583776,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583777,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583778,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583779,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583780,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363499,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583880,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363668,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583883,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363668,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583884,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4364044,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583887,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4364044,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583889,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363923,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583892,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4363923,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583895,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4364209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583898,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4364209,
         "shape_id": 390012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585449,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4364616,
         "shape_id": 390012
      }
   ],
   "39-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307232,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307233,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307234,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307235,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307236,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307237,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307238,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307239,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307240,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307241,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307242,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307243,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307244,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307245,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307246,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307247,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307248,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307249,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307250,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307251,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307252,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307253,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307254,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307255,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307256,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320287,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320288,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320289,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320290,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320291,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320292,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320293,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320294,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320295,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320296,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320297,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320298,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320299,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320300,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320301,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320302,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320303,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167674,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330419,
         "shape_id": 390013
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167677,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330419,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167682,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330638,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167687,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330504,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169037,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169038,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169039,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169040,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169041,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169042,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169043,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169044,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169045,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169046,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4329898,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169148,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330134,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169151,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330134,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169152,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330589,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169155,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330589,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169157,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330447,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169160,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330447,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169163,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330775,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169166,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330775,
         "shape_id": 390012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170735,
         "trip_headsign": "ACADIA",
         "direction_id": 0,
         "block_id": 4330983,
         "shape_id": 390012
      }
   ],
   "56-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537164,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537165,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537167,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537168,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537170,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537171,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537173,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537174,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537176,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537177,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537179,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537180,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537182,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537183,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537185,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537186,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537188,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537189,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537191,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360460,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537192,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360460,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537195,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537196,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537198,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537199,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537201,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537202,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537204,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537205,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537207,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537208,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537210,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537211,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537213,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537214,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537216,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537217,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537219,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537220,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537222,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360457,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537223,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360457,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537226,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537227,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537229,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537230,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537232,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537233,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537235,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537236,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537238,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537239,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537241,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537242,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537244,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537245,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537247,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537248,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537250,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537251,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537253,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360458,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537254,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360458,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537257,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537258,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537260,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537261,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537263,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537264,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537266,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537267,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537269,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537270,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537272,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537273,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537275,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537276,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537278,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537279,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537281,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360459,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35537282,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360459,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543434,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543435,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543437,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543438,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543440,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543441,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543443,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543444,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543446,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543447,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543449,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543450,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543452,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543453,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543455,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543456,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543458,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543459,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543463,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543464,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543466,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543467,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543469,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543470,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543472,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543473,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543475,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543476,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543478,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543479,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543481,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543482,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543484,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360693,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543485,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360693,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543488,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543489,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543491,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543492,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543494,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543495,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543497,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543498,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543500,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543501,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543503,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543504,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543506,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543507,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543509,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360694,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543510,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360694,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543514,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543515,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543517,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543518,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543520,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543521,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543523,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543524,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543526,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543527,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543529,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543530,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543532,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543533,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543535,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360695,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35543536,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360695,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521023,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359996,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522113,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359265,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522114,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359265,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522115,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359265,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522116,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359832,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522117,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359832,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522118,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359679,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522119,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359679,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522120,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359882,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522121,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359882,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522122,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359882,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522123,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359882,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522125,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359576,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522126,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359576,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522127,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359576,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522129,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359759,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522130,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359759,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522131,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359759,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522132,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359759,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522134,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359587,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522135,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359587,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522137,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359587,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522138,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359587,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522140,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359587,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522141,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359587,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522142,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359587,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522143,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359587,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522144,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359587,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522145,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359587,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522146,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359623,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522147,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359623,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522148,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359576,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522149,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359709,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522150,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359709,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522151,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359709,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522152,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359709,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522153,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359709,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522154,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359709,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522155,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359833,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522156,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359833,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522159,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359528,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522160,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359528,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522161,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359397,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522162,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359397,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522163,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359882,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522164,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359882,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522165,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359882,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522169,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359882,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522170,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359882,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522172,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359882,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522173,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359882,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522177,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359833,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522178,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359833,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522179,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359833,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522180,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359833,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522181,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359823,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522182,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359823,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522183,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359823,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522184,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359823,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522185,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359643,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522186,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359643,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522188,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359643,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522189,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359643,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522191,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359643,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522192,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359643,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522200,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359093,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522202,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359093,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522203,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359093,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522205,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359093,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522206,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359093,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522208,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359093,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522209,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359093,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522212,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359094,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522213,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359094,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522215,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359094,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522216,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359094,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522218,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359094,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522219,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359094,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523087,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523088,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523090,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523091,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35524836,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359397,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35524837,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359397,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525476,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359623,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526252,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359296,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526259,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359764,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526260,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359764,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526273,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359296,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526274,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359296,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526301,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360132,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526302,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360132,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526304,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360132,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526305,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360132,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526307,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4360132,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526308,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4360132,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526317,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359259,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526318,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359259,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526320,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359259,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526321,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359259,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526323,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359259,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526324,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359259,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526325,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359259,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526326,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359259,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526327,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4359764,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35526328,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4359764,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551616,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551617,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551619,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551620,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551622,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551623,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551625,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551626,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551628,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551629,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551631,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551632,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551634,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551635,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551637,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551638,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551640,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551641,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551643,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361026,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551644,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361026,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551647,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551648,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551650,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551651,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551653,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551654,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551656,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551657,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551659,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551660,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551662,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551663,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551665,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551666,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551668,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551669,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551671,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551672,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551674,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361023,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551675,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361023,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551678,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551679,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551681,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551682,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551684,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551685,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551687,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551688,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551690,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551691,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551693,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551694,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551696,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551697,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551699,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551700,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551702,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551703,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551705,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361024,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551706,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361024,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551709,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551710,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551712,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551713,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551715,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551716,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551718,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551719,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551721,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551722,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551724,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551725,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551727,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551728,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551730,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551731,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551733,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361025,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35551734,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361025,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557001,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361958,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558081,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361349,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558082,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361349,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558083,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361349,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558084,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361823,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558085,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361823,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558086,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361696,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558087,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361696,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558088,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361870,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558089,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361870,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558090,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361870,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558091,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361870,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558093,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361609,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558094,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361609,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558095,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361609,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558096,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361764,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558097,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361764,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558098,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361764,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558099,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361764,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558101,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361617,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558102,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361617,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558104,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361617,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558105,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361617,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558107,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361617,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558108,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361617,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558109,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361617,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558110,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361617,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558111,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361617,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558112,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361617,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558113,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361648,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558114,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361648,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558115,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361609,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558116,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361718,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558117,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361718,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558118,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361718,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558119,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361718,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558120,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361718,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558121,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361718,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558122,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361824,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558123,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361824,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558125,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361562,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558126,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361562,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558127,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361449,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558128,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361449,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558129,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361870,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558130,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361870,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558131,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361870,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558135,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361870,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558136,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361870,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558138,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361870,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558139,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361870,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558143,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361824,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558144,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361824,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558145,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361824,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558146,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361824,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558147,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361815,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558148,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361815,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558149,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361815,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558150,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361815,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558151,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361665,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558152,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361665,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558154,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361665,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558155,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361665,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558157,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361665,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558158,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361665,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558166,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361198,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558168,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361198,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558169,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361198,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558171,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361198,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558172,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361198,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558174,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361198,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558175,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361198,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558178,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361199,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558179,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361199,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558181,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361199,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558182,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361199,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558184,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361199,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558185,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361199,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559014,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559015,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559017,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559018,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35560702,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361449,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35560703,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361449,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561331,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361648,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562026,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361373,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562033,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361768,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562034,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361768,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562047,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361373,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562048,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361373,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562075,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362073,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562076,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362073,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562078,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362073,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562079,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362073,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562081,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362073,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562082,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362073,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562091,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361345,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562092,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361345,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562094,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361345,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562095,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361345,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562097,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361345,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562098,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361345,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562099,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361345,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562100,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361345,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562101,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4361768,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35562102,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4361768,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570347,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363037,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571421,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362494,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571422,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362494,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571423,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362494,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571424,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362920,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571425,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362920,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571426,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362803,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571427,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362803,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571428,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362963,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571429,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362963,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571430,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362963,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571431,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362963,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571433,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362725,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571434,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362725,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571435,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362725,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571436,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362868,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571437,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362868,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571438,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362868,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571439,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362868,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571441,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362732,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571442,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362732,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571444,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362732,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571445,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362732,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571447,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362732,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571448,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362732,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571449,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362732,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571450,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362732,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571451,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362732,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571452,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362732,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571453,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362762,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571454,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362762,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571455,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362725,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571456,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362823,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571457,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362823,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571458,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362823,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571459,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362823,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571460,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362823,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571461,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362823,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571462,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362921,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571463,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362921,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571465,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362680,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571466,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362680,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571467,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362578,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571468,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362578,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571469,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362963,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571470,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362963,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571471,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362963,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571475,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362963,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571476,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362963,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571478,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362963,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571479,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362963,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571483,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362921,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571484,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362921,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571485,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362921,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571486,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362921,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571487,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362913,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571488,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362913,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571489,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362913,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571490,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362913,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571491,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362777,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571492,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362777,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571494,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362777,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571495,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362777,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571497,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362777,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571498,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362777,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571506,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362355,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571508,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362355,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571509,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362355,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571511,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362355,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571512,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362355,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571514,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362355,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571515,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362355,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571518,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362356,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571519,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362356,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571521,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362356,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571522,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362356,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571524,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362356,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571525,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362356,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572324,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572325,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572327,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572328,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35573975,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362578,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35573976,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362578,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574591,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362762,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575255,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362513,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575262,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362872,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575263,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362872,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575276,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362513,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575277,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362513,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575304,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363138,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575305,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363138,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575307,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363138,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575308,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363138,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575310,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363138,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575311,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363138,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575320,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362490,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575321,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362490,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575323,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362490,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575324,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362490,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575326,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362490,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575327,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362490,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575328,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362490,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575329,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362490,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575330,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4362872,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35575331,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4362872,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583342,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364341,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584429,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363654,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584430,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363654,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584431,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363654,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584432,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364188,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584433,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364188,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584434,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364039,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584435,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364039,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584436,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364236,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584437,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364236,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584438,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364236,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584439,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364236,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584441,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363942,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584442,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363942,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584443,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363942,
         "shape_id": 560026
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584445,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364119,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584446,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364119,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584447,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364119,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584448,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364119,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584450,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363952,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584451,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363952,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584453,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363952,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584454,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363952,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584456,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363952,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584457,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363952,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584458,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363952,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584459,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363952,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584460,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363952,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584461,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363952,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584462,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363988,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584463,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363988,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584464,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363942,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584465,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364069,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584466,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364069,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584467,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364069,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584468,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364069,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584469,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364069,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584470,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364069,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584471,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364189,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584472,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364189,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584475,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363894,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584476,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363894,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584477,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363773,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584478,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363773,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584479,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364236,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584480,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364236,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584481,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364236,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584485,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364236,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584486,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364236,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584488,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364236,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584489,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364236,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584493,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364189,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584494,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364189,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584495,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364189,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584496,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364189,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584497,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364180,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584498,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364180,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584499,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364180,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584500,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364180,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584501,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364006,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584502,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364006,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584504,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364006,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584505,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364006,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584507,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364006,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584508,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364006,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584516,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363488,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584518,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363488,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584519,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363488,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584521,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363488,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584522,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363488,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584524,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363488,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584525,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363488,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584528,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363489,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584529,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363489,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584531,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363489,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584532,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363489,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584534,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363489,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584535,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363489,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585387,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585388,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585390,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585391,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35587112,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363773,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35587113,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363773,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35587746,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363988,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588496,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363682,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588503,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364124,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588504,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364124,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588517,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363682,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588518,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363682,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588545,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364472,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588546,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364472,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588548,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364472,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588549,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364472,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588551,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364472,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588552,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364472,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588561,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363648,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588562,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363648,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588564,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363648,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588565,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363648,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588567,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363648,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588568,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363648,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588569,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4363648,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588570,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4363648,
         "shape_id": 560025
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588571,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4364124,
         "shape_id": 560024
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588572,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4364124,
         "shape_id": 560025
      }
   ],
   "56-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310983,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310984,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310986,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310987,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310989,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310990,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310992,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310993,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310995,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310996,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310998,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35310999,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311001,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311002,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311004,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311005,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311007,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311008,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311010,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342998,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311011,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342998,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311014,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311015,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311017,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311018,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311020,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311021,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311023,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311024,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311026,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311027,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311029,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311030,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311032,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311033,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311035,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311036,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311038,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311039,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311041,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342995,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311042,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342995,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311045,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311046,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311048,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311049,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311051,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311052,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311054,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311055,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311057,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311058,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311060,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311061,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311063,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311064,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311066,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311067,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311069,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311070,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311072,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342996,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311073,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342996,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311076,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311077,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311079,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311080,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311082,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311083,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311085,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311086,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311088,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311089,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311091,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311092,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311094,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311095,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311097,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311098,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311100,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4342997,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35311101,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4342997,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323418,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323419,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323421,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323422,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323424,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323425,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323427,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323428,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323430,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323431,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323433,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323434,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323436,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323437,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323439,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323440,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323442,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343498,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323443,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343498,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323447,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323448,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323450,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323451,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323453,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323454,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323456,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323457,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323459,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323460,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323462,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323463,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323465,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323466,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323468,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343495,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323469,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343495,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323472,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323473,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323475,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323476,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323478,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323479,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323481,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323482,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323484,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323485,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323487,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323488,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323490,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323491,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323493,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343496,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323494,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343496,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323498,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323499,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323501,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323502,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323504,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323505,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323507,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323508,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323510,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323511,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323513,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323514,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323516,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323517,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323519,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4343497,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35323520,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4343497,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35168607,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330938,
         "shape_id": 560026
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169699,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330116,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169700,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330116,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169701,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330116,
         "shape_id": 560026
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169702,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330750,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169703,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330750,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169704,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330582,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169705,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330582,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169706,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330808,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169707,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330808,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169708,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330808,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169709,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330808,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169711,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330469,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169712,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330469,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169713,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330469,
         "shape_id": 560026
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169715,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330671,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169716,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330671,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169717,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330671,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169718,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330671,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169720,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330480,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169721,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330480,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169723,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330480,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169724,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330480,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169726,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330480,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169727,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330480,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169728,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330480,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169729,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330480,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169730,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330109,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169731,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330109,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169732,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330520,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169733,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330520,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169734,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330469,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169735,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330615,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169736,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330615,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169737,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330615,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169738,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330615,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169739,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330615,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169740,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330615,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169741,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330751,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169742,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330751,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169745,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330297,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169746,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330297,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169747,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330259,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169748,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330259,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169749,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330808,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169750,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330808,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169751,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330808,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169755,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330808,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169756,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330808,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169758,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330808,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169759,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330808,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169763,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330751,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169764,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330751,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169765,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330751,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169766,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330751,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169767,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330740,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169768,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330740,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169769,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330740,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169770,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330740,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169771,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330541,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169772,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330541,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169774,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330541,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169775,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330541,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169777,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330541,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169778,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330541,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169786,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329886,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169788,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329886,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169789,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329886,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169791,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329886,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169792,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329886,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169794,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329886,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169795,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329886,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169798,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329887,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169799,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329887,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169801,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329887,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169802,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329887,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169804,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329887,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169805,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329887,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170673,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170674,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170676,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170677,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35172432,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330451,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35172433,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330451,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173125,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330520,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173914,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330152,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173921,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330677,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173922,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330677,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173935,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330152,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173936,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330152,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173963,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330054,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173964,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330054,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173966,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330054,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173967,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330054,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173969,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330054,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173970,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330054,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173979,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330109,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173980,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330109,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173982,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330865,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173983,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330865,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173985,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330865,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173986,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330865,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173987,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330865,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173988,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330865,
         "shape_id": 560025
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173989,
         "trip_headsign": "WOODBINE",
         "direction_id": 0,
         "block_id": 4330677,
         "shape_id": 560024
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173990,
         "trip_headsign": "WOODBINE",
         "direction_id": 1,
         "block_id": 4330677,
         "shape_id": 560025
      }
   ],
   "79-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533750,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790015
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533751,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533752,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533753,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533754,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533755,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533756,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533757,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533758,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533759,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533760,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533761,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533762,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533763,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533764,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533765,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533766,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533767,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533768,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533769,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533770,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533771,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533772,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533773,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533774,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533775,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533776,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533777,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533778,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533779,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533780,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533781,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360354,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533782,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533783,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360353,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540407,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540408,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540409,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540410,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540411,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540412,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540413,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540414,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540415,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540416,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540417,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540418,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540419,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540420,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540421,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360594,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540837,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540838,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540839,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540840,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540841,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540842,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540843,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540844,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540845,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540846,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540847,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540848,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540849,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540850,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360595,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522924,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522925,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522926,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522927,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522928,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522929,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522930,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522931,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522932,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522933,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522934,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522935,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359558,
         "shape_id": 790012
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522936,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359558,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522937,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4359558,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522938,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522939,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522940,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522941,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522942,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522943,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522944,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522945,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522946,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522947,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522948,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522950,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359304,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522951,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359304,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522952,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360048,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522953,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360048,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522954,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360048,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522955,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522956,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522957,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522958,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522959,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522960,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359914,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522961,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522962,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522963,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522964,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522965,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522966,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4359912,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522975,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522976,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548272,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790015
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548273,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548274,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548275,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548276,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548277,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548278,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548279,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548280,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548281,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548282,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548283,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548284,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548285,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548286,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548287,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548288,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548289,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548290,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548291,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548292,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548293,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548294,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548295,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548296,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548297,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548298,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548299,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548300,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548301,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548302,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548303,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548304,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548305,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4360923,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558853,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558854,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558855,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558856,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558857,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558858,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558859,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558860,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558861,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558862,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558863,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558864,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361592,
         "shape_id": 790012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558865,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361592,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558866,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4361592,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558867,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558868,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558869,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558870,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558871,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558872,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558873,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558874,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558875,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558876,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558877,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558879,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362208,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558880,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362208,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558881,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361992,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558882,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361992,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558883,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361992,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558884,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558885,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558886,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558887,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558888,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558889,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361897,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558890,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558891,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558892,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558893,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558894,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558895,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4361895,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558903,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558904,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572164,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572165,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572166,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572167,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572168,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572169,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572170,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572171,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572172,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572173,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572174,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572175,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362709,
         "shape_id": 790012
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572176,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362709,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572177,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4362709,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572178,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572179,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572180,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572181,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572182,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572183,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572184,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572185,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572186,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572187,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572188,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572189,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363266,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572190,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363266,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572191,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363059,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572192,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363059,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572193,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363059,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572194,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572195,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572196,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572197,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572198,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572199,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362989,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572200,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572201,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572202,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572203,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572204,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572205,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4362987,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572213,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572214,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585225,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585226,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585227,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585228,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585229,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585230,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585231,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585232,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585233,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585234,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585235,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585236,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363924,
         "shape_id": 790012
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585237,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363924,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585238,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4363924,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585239,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790013
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585240,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585241,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585242,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585243,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585244,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585245,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585246,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585247,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585248,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585249,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585250,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364624,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585251,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364624,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585252,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364388,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585253,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364388,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585254,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364388,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585255,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585256,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585257,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585258,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585259,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585260,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364267,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585261,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585262,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585263,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585264,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585265,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585266,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4364265,
         "shape_id": 790014
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585275,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 790011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585276,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 790011
      }
   ],
   "79-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307386,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790015
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307387,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307388,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307389,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307390,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307391,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307392,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307393,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307394,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307395,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307396,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307397,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307398,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307399,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307400,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307401,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307402,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307403,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307404,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307405,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307406,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307407,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307408,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307409,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307410,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307411,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307412,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307413,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307414,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307415,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307416,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307417,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342884,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307418,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307419,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4342883,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320224,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320225,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320226,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320227,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320228,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320229,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320230,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320231,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320232,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320233,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320234,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320235,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320236,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320237,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320238,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343386,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320654,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320655,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320656,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320657,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320658,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320659,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320660,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320661,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320662,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320663,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320664,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320665,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320666,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320667,
         "trip_headsign": "ROUTE 79",
         "direction_id": 0,
         "block_id": 4343387,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170510,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790013
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170511,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170512,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170513,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170514,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170515,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170516,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170517,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170518,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170519,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170520,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170521,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330450,
         "shape_id": 790012
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170522,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330450,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170523,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4330450,
         "shape_id": 790014
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170524,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790013
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170525,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170526,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170527,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170528,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170529,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170530,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170531,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170532,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170533,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170534,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170536,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330160,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170537,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330160,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170538,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4331004,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170539,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4331004,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170540,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4331004,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170541,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170542,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170543,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170544,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170545,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170546,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330840,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170547,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170548,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170549,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170550,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170551,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170552,
         "trip_headsign": "SOUTHLAND STN",
         "direction_id": 0,
         "block_id": 4330838,
         "shape_id": 790014
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170561,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 790011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170562,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 790011
      }
   ],
   "80-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533784,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533785,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533786,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533787,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533788,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533789,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533790,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533791,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533792,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533793,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533794,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533795,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533796,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533797,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533798,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533799,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533800,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533801,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533802,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533803,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533804,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533805,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533806,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360356,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533807,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533808,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360355,
         "shape_id": 800012
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540422,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540423,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540424,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540425,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540426,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540427,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540428,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540429,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540430,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540431,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540432,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540433,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360596,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540826,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540827,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540828,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540829,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540830,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540831,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540832,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540833,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540834,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540835,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540836,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360597,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520554,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360253,
         "shape_id": 800011
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520555,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360253,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520556,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360253,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522967,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359457,
         "shape_id": 800010
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522968,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359457,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522969,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359457,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522970,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522971,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522973,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360263,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522974,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4360263,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522977,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522978,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522979,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522980,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522981,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522982,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522983,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522984,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522985,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359251,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522986,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359525,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522987,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359525,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522988,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359525,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522989,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359525,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522991,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359523,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522992,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359523,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522993,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359523,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522996,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522997,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522998,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522999,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523000,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523001,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523002,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523003,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523004,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4359710,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548306,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548307,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548308,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548309,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548310,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548311,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548312,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548313,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548314,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548315,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548316,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548317,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548318,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548319,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548320,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548321,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548322,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548323,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548324,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548325,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548326,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548327,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548328,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360926,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548329,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548330,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4360925,
         "shape_id": 800012
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556536,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362180,
         "shape_id": 800011
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556537,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362180,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556538,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362180,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558896,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361497,
         "shape_id": 800010
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558897,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361497,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558898,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361497,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558899,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558900,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558901,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362190,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558902,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362190,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558905,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558906,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558907,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558908,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558909,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558910,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558911,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558912,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558913,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361338,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558914,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362215,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558915,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362215,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558916,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362215,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558917,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362215,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558918,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361558,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558919,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361558,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558920,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361558,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558923,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558924,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558925,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558926,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558927,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558928,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558929,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558930,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558931,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4361719,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569888,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363224,
         "shape_id": 800011
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569889,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363224,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569890,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363224,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572206,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362618,
         "shape_id": 800010
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572207,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362618,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572208,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362618,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572209,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572210,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572211,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363233,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572212,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363233,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572215,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572216,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572217,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572218,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572219,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572220,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572221,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572222,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572223,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362485,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572224,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363275,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572225,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363275,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572226,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363275,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572227,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363275,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572228,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362676,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572229,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362676,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572230,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362676,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572233,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572234,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572235,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572236,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572237,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572238,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572239,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572240,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572241,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4362824,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582876,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364588,
         "shape_id": 800011
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582877,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364588,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582878,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364588,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585267,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363825,
         "shape_id": 800010
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585268,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363825,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585269,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363825,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585270,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585271,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585273,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364598,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585274,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364598,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585277,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585278,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585279,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585280,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585281,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585282,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585283,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585284,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585285,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363642,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585286,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363891,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585287,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363891,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585288,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363891,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585289,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363891,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585291,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363889,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585292,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363889,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585293,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4363889,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585296,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585297,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585298,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585299,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585300,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585301,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585302,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585303,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585304,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4364070,
         "shape_id": 800009
      }
   ],
   "80-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307420,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307421,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307422,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307423,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307424,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307425,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307426,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307427,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307428,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307429,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307430,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307431,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307432,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307433,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307434,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307435,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307436,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307437,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307438,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307439,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307440,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307441,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307442,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342886,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307443,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307444,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4342885,
         "shape_id": 800012
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320239,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320240,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320241,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320242,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320243,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320244,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320245,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320246,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320247,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320248,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320249,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320250,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343388,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320643,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320644,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320645,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320646,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320647,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320648,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320649,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320650,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320651,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320652,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320653,
         "trip_headsign": "ROUTE 80",
         "direction_id": 0,
         "block_id": 4343389,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35168133,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330449,
         "shape_id": 800011
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35168134,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330449,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35168135,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330449,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170553,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330333,
         "shape_id": 800010
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170554,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330333,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170555,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330333,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170556,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170557,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170559,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330091,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170560,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330091,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170563,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170564,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170565,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170566,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170567,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170568,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170569,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170570,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170571,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330097,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170572,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330410,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170573,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330410,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170574,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330410,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170575,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330410,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170577,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330408,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170578,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330408,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170579,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330408,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170582,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170583,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170584,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170585,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170586,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170587,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170588,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170589,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170590,
         "trip_headsign": "HERITAGE STN",
         "direction_id": 0,
         "block_id": 4330616,
         "shape_id": 800009
      }
   ],
   "81-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536258,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536259,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536260,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536261,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536263,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810086
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536264,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536265,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536266,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536267,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536268,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536269,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536270,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536271,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536272,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536273,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536275,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536276,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360430,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536277,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536278,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536279,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536280,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536281,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536282,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536283,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536284,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536285,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536286,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536287,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536288,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536289,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536290,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536291,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536292,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360430,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536293,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360431,
         "shape_id": 810083
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35536294,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360431,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523057,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523058,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359713,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523059,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523060,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359713,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523061,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523062,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359713,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523063,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523064,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359713,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523065,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523066,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359713,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523067,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523068,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359713,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523069,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359713,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523072,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810072
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523073,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523074,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523075,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523076,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523077,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523078,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523079,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523080,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523081,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523082,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523083,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523084,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523085,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359099,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523086,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359099,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523095,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810089
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523096,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523097,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523098,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523099,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523100,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523101,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523102,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523103,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523104,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523105,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523106,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523107,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359184,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523108,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359184,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523120,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523121,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523122,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523123,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523124,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523125,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523126,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523127,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523128,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523129,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523130,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523131,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523132,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4359101,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523133,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4359101,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550710,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550711,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550712,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550713,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550715,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810086
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550716,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550717,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550718,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550719,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550720,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550721,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550722,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550723,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550724,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550725,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550727,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550728,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360996,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550729,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550730,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550731,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550732,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550733,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550734,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550735,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550736,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550737,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550738,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550739,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550740,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550741,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550742,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550743,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550744,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360996,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550745,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4360997,
         "shape_id": 810083
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35550746,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4360997,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558984,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558985,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361721,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558986,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558987,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361721,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558988,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558989,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361721,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558990,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558991,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361721,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558992,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558993,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361721,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558994,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558995,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361721,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558996,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361721,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558999,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810072
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559000,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559001,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559002,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559003,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559004,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559005,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559006,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559007,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559008,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559009,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559010,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559011,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559012,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361204,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559013,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361204,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559022,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810089
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559023,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559024,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559025,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559026,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559027,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559028,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559029,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559030,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559031,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559032,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559033,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559034,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361285,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559035,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361285,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559047,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559048,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559049,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559050,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559051,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559052,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559053,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559054,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559055,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559056,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559057,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559058,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559059,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4361206,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559060,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4361206,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572294,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572295,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362826,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572296,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572297,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362826,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572298,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572299,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362826,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572300,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572301,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362826,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572302,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572303,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362826,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572304,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572305,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362826,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572306,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362826,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572309,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810072
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572310,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572311,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572312,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572313,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572314,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572315,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572316,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572317,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572318,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572319,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572320,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572321,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572322,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362361,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572323,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362361,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572332,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810089
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572333,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572334,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572335,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572336,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572337,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572338,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572339,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572340,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572341,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572342,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572343,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572344,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362441,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572345,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362441,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572357,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572358,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572359,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572360,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572361,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572362,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572363,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572364,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572365,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572366,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572367,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572368,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572369,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4362363,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572370,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4362363,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585357,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585358,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4364073,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585359,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585360,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4364073,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585361,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585362,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4364073,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585363,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585364,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4364073,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585365,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585366,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4364073,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585367,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585368,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4364073,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585369,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4364073,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585372,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810072
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585373,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585374,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585375,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585376,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585377,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585378,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585379,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585380,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585381,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585382,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585383,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585384,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585385,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363494,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585386,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363494,
         "shape_id": 810087
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585395,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810089
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585396,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585397,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585398,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585399,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585400,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585401,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585402,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585403,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585404,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585405,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585406,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585407,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363578,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585408,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363578,
         "shape_id": 810092
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585420,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810091
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585421,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585422,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585423,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585424,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585425,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585426,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585427,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585428,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585429,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585430,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585431,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810088
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585432,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4363496,
         "shape_id": 810090
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585433,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4363496,
         "shape_id": 810087
      }
   ],
   "81-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309958,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309959,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309960,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309961,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309963,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810086
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309964,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810091
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309965,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810092
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309966,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309967,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309968,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309969,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309970,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309971,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309972,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309973,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309975,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309976,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342963,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309977,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309978,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309979,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309980,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309981,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309982,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309983,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309984,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309985,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309986,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309987,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309988,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309989,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309990,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309991,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309992,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342963,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309993,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4342964,
         "shape_id": 810083
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35309994,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4342964,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170643,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810091
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170644,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329892,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170645,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170646,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329892,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170647,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170648,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329892,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170649,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170650,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329892,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170651,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170652,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329892,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170653,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170654,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329892,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170655,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329892,
         "shape_id": 810092
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170658,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810072
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170659,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170660,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170661,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170662,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170663,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170664,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170665,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170666,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170667,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170668,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170669,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170670,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170671,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329893,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170672,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329893,
         "shape_id": 810087
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170681,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810089
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170682,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170683,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170684,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170685,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170686,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170687,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170688,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170689,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170690,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170691,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170692,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170693,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4330001,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170694,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4330001,
         "shape_id": 810092
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170706,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810091
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170707,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170708,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170709,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170710,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170711,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170712,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170713,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170714,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170715,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170716,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170717,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810088
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170718,
         "trip_headsign": "MACLEOD TR S",
         "direction_id": 1,
         "block_id": 4329895,
         "shape_id": 810090
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170719,
         "trip_headsign": "MACLEOD TR N",
         "direction_id": 0,
         "block_id": 4329895,
         "shape_id": 810087
      }
   ],
   "84-20450": [
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533540,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533541,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533542,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533543,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533544,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533545,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533546,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533547,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533548,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533549,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533550,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533551,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533552,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533553,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533554,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533555,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533556,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533557,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533558,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533559,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533560,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533561,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533562,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533563,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533564,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360348,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533565,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360373,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35533566,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360347,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534717,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534718,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534719,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534720,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSA-Saturday-02",
         "trip_id": 35534721,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360345,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540451,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540452,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540453,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540454,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540455,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540456,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540457,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540458,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540459,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540460,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540461,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540462,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540463,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540464,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540465,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540466,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540467,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360780,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540468,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360783,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35540469,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360619,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541296,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541297,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541298,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541299,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541300,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541302,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541304,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541307,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSSU-Sunday-02",
         "trip_id": 35541308,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360618,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520104,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359532,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520107,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359532,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520109,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359730,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520112,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359730,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35520114,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359610,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521562,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359282,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521565,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359282,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521569,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359684,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521574,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359557,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521577,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359854,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35521580,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359854,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35522199,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359093,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523148,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359336,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523151,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4359336,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523153,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523154,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523155,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523156,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523157,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523158,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523159,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523160,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35523161,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360104,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525799,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525800,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525801,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525802,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525803,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525804,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525805,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-1BUSWK-Weekday-02",
         "trip_id": 35525806,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364974,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548062,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548063,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548064,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548065,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548066,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548067,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548068,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548069,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548070,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548071,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548072,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548073,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548074,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548075,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548076,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548077,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548078,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548079,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548080,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548081,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548082,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548083,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548084,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548085,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548086,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360918,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548087,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360943,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35548088,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360917,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549239,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549240,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549241,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549242,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-pB6Dec31-Saturday-02",
         "trip_id": 35549243,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4360915,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556091,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361566,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556094,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361566,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556096,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361736,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556099,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361736,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35556101,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361637,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557538,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361363,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557541,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361363,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557545,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361700,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557550,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361591,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557553,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361844,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35557556,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361844,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35558165,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361198,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559075,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361401,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559078,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4361401,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559080,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559081,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559082,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559083,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559084,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559085,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559086,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559087,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35559088,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362048,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561647,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561648,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561649,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561650,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561651,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561652,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561653,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Pub Brk-Weekday-05",
         "trip_id": 35561654,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366988,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569451,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362684,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569454,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362684,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569456,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362841,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569459,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362841,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35569461,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362751,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570882,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362505,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570885,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362505,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570889,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362807,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570894,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362708,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570897,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362939,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35570900,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362939,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35571505,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4362355,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572385,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363268,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572388,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363268,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572390,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572391,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572392,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572393,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572394,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572395,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572396,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572397,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35572398,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363115,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574899,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574900,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574901,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574902,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574903,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574904,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574905,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sch Brk-Weekday-06",
         "trip_id": 35574906,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366996,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582428,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363898,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582431,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363898,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582433,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364090,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582436,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364090,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35582438,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363975,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583879,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363668,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583882,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363668,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583886,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364044,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583891,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363923,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583894,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364209,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35583897,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364209,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35584515,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4363488,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585448,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364616,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585451,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364616,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585453,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585454,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585455,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585456,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585457,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585458,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585459,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585460,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35585461,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4364444,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588063,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588064,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588065,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588066,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588067,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588068,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588069,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      },
      {
         "service_id": "2016DE-Sep Brk-Weekday-07",
         "trip_id": 35588070,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4366993,
         "shape_id": 840006
      }
   ],
   "84-20449": [
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307176,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307177,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307178,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307179,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307180,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307181,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307182,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307183,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307184,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307185,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307186,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307187,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307188,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307189,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307190,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307191,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307192,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307193,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307194,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307195,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307196,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307197,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307198,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307199,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307200,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342879,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307201,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342903,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35307202,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308355,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308356,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308357,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308358,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSA-Saturday-08",
         "trip_id": 35308359,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4342876,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320268,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320269,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320270,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320271,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320272,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320273,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320274,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320275,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320276,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320277,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320278,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320279,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320280,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320281,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320282,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320283,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320284,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343413,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320285,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343446,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35320286,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343412,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321180,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321181,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321182,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321183,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321184,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321186,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321188,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321191,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSSU-Sunday-08",
         "trip_id": 35321192,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4343411,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167676,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330419,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167679,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330419,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167681,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330638,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167684,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330638,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35167686,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330504,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169147,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330134,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169150,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330134,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169154,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330589,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169159,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330447,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169162,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330775,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169165,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330775,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35169785,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329886,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170734,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330983,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170737,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330983,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170739,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170740,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170741,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170742,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170743,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170744,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170745,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170746,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35170747,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4330055,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173451,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173452,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173453,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173454,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173455,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173456,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173457,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      },
      {
         "service_id": "2016SE-1BUSWK-Weekday-07",
         "trip_id": 35173458,
         "trip_headsign": "PALLISER",
         "direction_id": 0,
         "block_id": 4329878,
         "shape_id": 840006
      }
   ]
};
var stop_times;

// creates the object to fetch the appropriate data for each JSON
function fetchJSON (file, variable){
  $.getJSON(file, function(result){
      var variable = result;
      console.log(variable);
      return variable;
    });
};

// assigns JSON to variable using OOJS
var routeFetch = new fetchJSON("./components/json/routes.json", routes);
var stopsFetch = new fetchJSON("./components/json/stops.json", stops);
var tripsFetch = new fetchJSON("./components/json/trips.json", trips);
var stoptimesFetch = new fetchJSON("./components/json/stop_times.json", stop_times);

var accounts = ["WHDH","TF"];
var mediaGroups = {"WHDH": ["WHDH_1","WHDH_2"], "TF": ["TF_1","TF_2"]};
var clipUrls = {"WHDH_1": ["/live/whdh1/1","/live/whdh1/2","/live/whdh1/3"], "WHDH_2": ["/live/whdh2/1","/live/whdh2/2","/live/whdh2/3"], "TF_1": ["/live/tf1/1","/live/tf1/2","/live/tf1/3"], "TF_2": ["/live/tf2/1","/live/tf2/2","/live/tf2/3"]};

$('#first').change(function() {
    
    $('#second').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(mediaGroups[$(this).val()], function(key, value) {   
     $('#second')
         .append($("<option></option>")
         .attr("value",value)
         .text(value)); 
    });
});

$('#second').change(function() {
    $('#third').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(clipUrls[$(this).val()], function(key, value) {   
     $('#third')
         .append($("<option></option>")
         .attr("value",value)
         .text(value)); 
    });
});

// test for fetch values
$('#routes').change(function() {
    
    $('#stops').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(trips[$(this).val()], function(key, value) {   
     $('#stops')
         .append($("<option></option>")
         .attr("value",value)
         .text(value)); 
    });
});