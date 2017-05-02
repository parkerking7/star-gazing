var app = angular.module("apiApp");

app.service("weatherService", function ($http) {

	this.getLocation = function () {
		return $http.get("http://jsonip.com/?callback=", function (response) {
				return response.data;

			})
			.then(function (response) {
				this.ip = response.data.ip

				return $http.get("http://freegeoip.net/json/" + ip);
			})
	}
	this.getWeather = function (lat, long) {
		return $http.jsonp("https://api.darksky.net/forecast/46f953621ee05f1bec7b5ebfd43f4f49/" + lat + "," + long + "?callback=JSON_CALLBACK")
	}

	this.shouldGo = function (rain, clouds) {
		switch (true) {
			case (rain > 70 && clouds > 70):
				return "It looks like it is going to rain, and it is quite cloudy. You will want to go another day!";
				break;
			case (rain > 70 && clouds > 50):
				return "It looks like it is going to rain, and there is at least 50% cloud coverage in the sky. You will want to go another day";
				break;
			case (rain > 70 && clouds > 20):
				return "It looks like it is going to rain, on the plus side, it isn't too that cloudy. You will still want to go another day";
				break;
			case (rain > 70 && clouds < 20):
				return "It looks like it is going to rain, on the plus side, it is hardly cloudy at all. You could risk it if you like the rain.";
				break;
			case (rain > 50 && clouds > 70):
				return "The odds of it raining are about 50/50, although it is very cloudy, you probably shouldn't go.";
				break;
			case (rain > 50 && clouds > 50):
				return "The odds of it raining are about 50/50, and the cloud coverage is around 50%. If you're feeling lucky definitely go";
				break;
			case (rain > 50 && clouds > 20):
				return "The odds of it raining are about 50/50, in good news it isn't all that cloudy. If you don't mind the rain, definitely go!";
				break;
			case (rain > 50 && clouds < 20):
				return "The odds of it raining are about 50/50, in good news there is hardly a cloud in the sky!";
				break;
			case (rain > 20 && clouds > 70):
				return "There is a small chance of it raining, although the clouds are definitely going to be in the way.";
				break;
			case (rain > 20 && clouds > 50):
				return "There is a small chance of it raining, although clouds are covering 50% of the sky. It's you're call if you'd like to go";
				break;
			case (rain > 20 && clouds > 20):
				return "There is a small chance of it raining,  and cloud coverage won't be too bad, you should still be able to see the major stars!";
				break;
			case (rain > 20 && clouds < 20):
				return "There is a small chance of it raining, and it looks like the cloud coverage is very low, take the chance while you can!";
				break;
			case (rain < 20 && clouds > 70):
				return "It looks like you won't have to worry about rain! Although clouds are covering up a lot of the sky, you might not want to go tonight."
				break;
			case (rain < 20 && clouds > 50):
				return "It looks like you won't have to worry about rain! Although clouds are covering at least half the sky, you may miss that big constellation!"
				break;
			case (rain < 20 && clouds > 20):
				return "It looks like you won't have to worry about rain, and the clouds aren't covering up that much of the sky, go tonight!"
				break;
			case (rain < 20 && clouds < 20):
				return "It looks like you won't have to worry about rain or clouds! Have fun Star Gazing tonight!"
				break;

		}

	}


})
