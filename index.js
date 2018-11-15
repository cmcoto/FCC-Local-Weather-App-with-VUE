var CELSIUS = 0,FAHRENHEIT = 1;


var app = new Vue({
  el: '#app',
  data: {
    title: 'Your Local Weather',
    position: null,
    info: null,
    loading: true,
    errored: false,
    weather: null,
    onFahrenheit: true,
    seen: false },






  methods: {
    reloadWebsite: function reloadWebsite() {
      location.reload(true);

    }




    //-------END METHODS 
  },
  //geolocation-------START
  mounted: function mounted() {var _this2 = this;
    if (navigator.geolocation) {
      var self = this;
      navigator.geolocation.getCurrentPosition(function (position) {var _this = this;
        self.position = position.coords;
        self.lon = position.coords.longitude;
        self.lat = position.coords.latitude;
        self.lat = parseFloat(self.lat).toFixed(2);
        self.lon = parseFloat(self.lon).toFixed(2);
        axios.
        get('https://fcc-weather-api.glitch.me/api/current?lon=' + app.lon + '&lat=' + app.lat).
        then(function (response) {return app.info = response.data;}).
        then(function (response) {return app.weather = response.weather;}).
        then(function (response) {return app.image = app.weather[0].icon;}).
        then(function (response) {return app.temp = _this.info.main.temp;});


      }).
      catch(function (error) {
        console.log(error);
        _this2.errored = true;
      }).
      finally(function () {return _this2.loading = false;});

    }
  },
  //End of Mounted
  //geolocation-----END 

  computed: function computed() {
    curTempDisplay: {


    }
  }

  //end of computed
});